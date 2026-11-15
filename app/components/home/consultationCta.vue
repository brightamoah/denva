<script setup lang="ts">
const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useGsapContext(sectionRef, (gsap) => {
  gsap.from("[data-cta-wrap]", {
    y: 22,
    opacity: 0,
    duration: 0.85,
    stagger: 0.08,
    ease: "power3.out",
    clearProps: "transform,opacity",
    scrollTrigger: {
      trigger: sectionRef.value,
      start: "top 84%",
      once: true,
    },
  });
});
</script>

<template>
  <section
    ref="sectionRef"
    class="relative isolate overflow-hidden bg-primary-950 text-primary-50"
  >
    <span
      aria-hidden="true"
      class="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[22rem] font-light leading-none text-primary-50/5 lg:block"
    >
      XII
    </span>

    <UContainer class="relative max-w-4xl py-24 text-center sm:py-32">
      <p
        data-cta-wrap
        class="flex items-center justify-center gap-3 text-[10px] font-normal uppercase tracking-[0.34em] text-secondary-300"
      >
        <span
          class="h-px w-8 bg-secondary"
          aria-hidden="true"
        />
        Private Commissions
        <span
          class="h-px w-8 bg-secondary"
          aria-hidden="true"
        />
      </p>

      <h2
        data-cta-wrap
        class="mt-6 font-serif text-4xl font-light leading-[1.05] tracking-tight text-primary-50 text-balance sm:text-5xl lg:text-6xl"
      >
        Begin your manuscript <em class="italic text-secondary-300">in confidence.</em>
      </h2>

      <p
        data-cta-wrap
        class="mx-auto mt-6 max-w-xl text-sm font-light leading-relaxed text-primary-100/70 text-pretty sm:text-base"
      >
        Denva Books accepts twelve bespoke publishing and ghostwriting commissions each year.
        Arrange an introductory dialogue with our Managing Editorial Partner.
      </p>

      <div
        data-cta-wrap
        class="mt-10 flex justify-center"
      >
        <UButton
          label="Arrange a private consultation"
          to="/contact"
          color="secondary"
          variant="solid"
          trailing-icon="i-lucide-arrow-right"
          class="min-h-12 cursor-pointer rounded-none px-9 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-950 hover:bg-secondary-400 active:bg-secondary-400 focus-visible:outline-3 focus-visible:outline-secondary-100"
        />
      </div>

      <p
        data-cta-wrap
        class="mt-10 text-[9px] font-light uppercase tracking-[0.3em] text-primary-100/70"
      >
        By introduction <span class="mx-2 text-secondary">·</span> London &amp; New York
      </p>
    </UContainer>
  </section>
</template>
