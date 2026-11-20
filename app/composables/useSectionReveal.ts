import type { Ref } from "vue";

export interface SectionRevealOptions {
  selector?: string;
  y?: number;
  stagger?: number;
  start?: string;
  duration?: number;
}

export function useSectionReveal(
  scope: Ref<HTMLElement | null>,
  options: SectionRevealOptions = {},
) {
  const {
    selector = "[data-reveal]",
    y = 22,
    stagger = 0.08,
    start = "top 82%",
    duration = 0.8,
  } = options;

  useGsapContext(scope, (gsap) => {
    const trigger = scope.value;
    if (!trigger) return;

    const targets = [
      ...trigger.querySelectorAll<HTMLElement>(selector),
    ];
    if (!targets.length) return;

    gsap.from(targets, {
      y,
      opacity: 0,
      duration,
      stagger,
      ease: "power3.out",
      clearProps: "transform,opacity",
      scrollTrigger: {
        trigger,
        start,
        once: true,
      },
    });
  });
}
