<script setup lang="ts">
const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const { count } = useCart();

useSectionReveal(sectionRef, {
  start: "top 95%",
  stagger: 0.07,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-default border-default border-b"
  >
    <UContainer class="py-15 sm:py-20 max-w-7xl">
      <div class="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-8">
        <div>
          <AppEyebrowLabel
            label="Your Acquisitions"
            data-reveal
          />

          <h1
            data-reveal
            class="mt-6 font-serif font-normal text-highlighted text-5xl sm:text-6xl text-balance leading-[0.98] tracking-[-0.015em]"
          >
            Your <span class="text-accent">cart.</span>
          </h1>

          <p
            data-reveal
            class="mt-6 max-w-xl font-normal text-toned text-base text-pretty leading-relaxed"
          >
            {{ count > 0
              ? `${count} ${count === 1 ? "edition" : "editions"} reserved for the next step.`
              : "Nothing selected yet. The edition room is a good place to begin." }}
          </p>
        </div>

        <UButton
          label="Continue browsing"
          to="/store"
          color="neutral"
          variant="outline"
          trailing-icon="i-lucide-arrow-right"
          class="px-6 rounded-none w-fit min-h-11 font-normal text-[10px] uppercase tracking-[0.24em] cursor-pointer"
          data-reveal
        />
      </div>
    </UContainer>
  </section>
</template>
