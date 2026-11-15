import type { Ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let pluginRegistered = false;

function ensureScrollTrigger() {
  if (import.meta.client && !pluginRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    pluginRegistered = true;
  }
}

export function prefersReducedMotion(): boolean {
  if (!import.meta.client) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function useGsapContext(
  scope: Ref<HTMLElement | null>,
  setup: (g: typeof gsap) => void,
) {
  let ctx: gsap.Context | undefined;
  let stopWaiting: (() => void) | undefined;

  onMounted(() => {
    const el = scope.value;
    if (!el || prefersReducedMotion()) return;

    const start = () => {
      ensureScrollTrigger();
      ctx = gsap.context(() => {
        setup(gsap);
      }, el);
    };

    // A hidden tab pauses requestAnimationFrame, which would leave "from"
    // tweens stuck at their hidden start values. Wait until the page is
    // visible so the intro always runs and the content is never stranded.
    if (document.visibilityState === "hidden") {
      const onVisible = () => {
        if (document.visibilityState !== "visible") return;
        stopWaiting?.();
        start();
      };
      document.addEventListener("visibilitychange", onVisible);
      stopWaiting = () => document.removeEventListener("visibilitychange", onVisible);
      return;
    }

    start();
  });

  onBeforeUnmount(() => {
    stopWaiting?.();
    ctx?.revert();
  });
}
