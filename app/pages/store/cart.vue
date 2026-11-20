<script setup lang="ts">
const { count } = useCart();

useSeoMeta({
  title: "Your Cart · Denva Books",
  description: "Review the books you have selected from the Denva Books store.",
  robots: "noindex",
});
</script>

<template>
  <section class="bg-default border-default border-b">
    <UContainer class="py-6 max-w-7xl sm:py10">
      <NuxtLink
        to="/store"
        class="inline-flex items-center gap-2 font-normal text-[10px] text-muted hover:text-highlighted uppercase tracking-[0.24em] transition-colors duration-300"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-3.5"
          aria-hidden="true"
        />
        Back to store
      </NuxtLink>

      <div class="gap-12 lg:gap-16 grid lg:grid-cols-12 mt-8">
        <StoreCartContents class="lg:col-span-7" />

        <StoreCartSummary
          v-if="count > 0"
          class="lg:col-span-5"
        />
      </div>
    </UContainer>
  </section>
</template>
