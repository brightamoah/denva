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
    class="isolate relative bg-primary-800 overflow-hidden text-primary-50"
  >
    <UContainer class="relative py-20 max-w-4xl text-center">
      <p
        data-cta-wrap
        class="flex justify-center items-center gap-3 font-normal text-[10px] text-secondary uppercase tracking-[0.34em]"
      >
        <span
          class="bg-secondary w-8 h-px"
          aria-hidden="true"
        />
        Start Your Book
        <span
          class="bg-secondary w-8 h-px"
          aria-hidden="true"
        />
      </p>

      <h2
        data-cta-wrap
        class="mt-6 font-serif text-primary-50 text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
      >
        Ready to publish? <span class="text-secondary">Let's talk.</span>
      </h2>

      <p
        data-cta-wrap
        class="mx-auto mt-6 max-w-xl font-normal text-primary-100/80 text-sm sm:text-base text-pretty leading-relaxed"
      >
        Tell us what you have, whether that is an idea, a manuscript or a finished file, and what
        you want the book to do. We will explain the next step and give you a clear quote.
      </p>

      <div
        data-cta-wrap
        class="flex justify-center mt-10"
      >
        <UButton
          label="Get a quote"
          to="/contact"
          color="secondary"
          variant="solid"
          trailing-icon="i-lucide-arrow-right"
          class="px-9 rounded-none focus-visible:outline-3 focus-visible:outline-secondary-100 min-h-12 font-medium text-[11px] text-primary-950 uppercase tracking-[0.24em] cursor-pointer"
        />
      </div>
    </UContainer>
  </section>
</template>
