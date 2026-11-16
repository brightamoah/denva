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
    class="isolate relative bg-primary-950 overflow-hidden text-primary-50"
  >
    <span
      aria-hidden="true"
      class="hidden lg:block top-1/2 -right-10 absolute font-serif font-light text-[22rem] text-primary-50/5 leading-none -translate-y-1/2 pointer-events-none select-none"
    >
      XII
    </span>

    <UContainer class="relative py-20 max-w-4xl text-center">
      <p
        data-cta-wrap
        class="flex justify-center items-center gap-3 font-normal text-[10px] text-secondary-300 uppercase tracking-[0.34em]"
      >
        <span
          class="bg-secondary w-8 h-px"
          aria-hidden="true"
        />
        Private Commissions
        <span
          class="bg-secondary w-8 h-px"
          aria-hidden="true"
        />
      </p>

      <h2
        data-cta-wrap
        class="mt-6 font-serif font-light text-primary-50 text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
      >
        Begin your manuscript <em class="text-secondary-300 italic">in confidence.</em>
      </h2>

      <p
        data-cta-wrap
        class="mx-auto mt-6 max-w-xl font-light text-primary-100/70 text-sm sm:text-base text-pretty leading-relaxed"
      >
        Denva Books accepts twelve bespoke publishing and ghostwriting commissions each year.
        Arrange an introductory dialogue with our Managing Editorial Partner.
      </p>

      <div
        data-cta-wrap
        class="flex justify-center mt-10"
      >
        <UButton
          label="Arrange a private consultation"
          to="/contact"
          color="secondary"
          variant="solid"
          trailing-icon="i-lucide-arrow-right"
          class="hover:bg-secondary-400 active:bg-secondary-400 px-9 rounded-none focus-visible:outline-3 focus-visible:outline-secondary-100 min-h-12 font-medium text-[11px] text-primary-950 uppercase tracking-[0.24em] cursor-pointer"
        />
      </div>
    </UContainer>
  </section>
</template>
