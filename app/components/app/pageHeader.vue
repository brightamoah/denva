<script setup lang="ts">
interface Props {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: "",
  accent: "",
  description: "",
});
</script>

<template>
  <section class="bg-default border-default border-b">
    <UContainer class="py-8 sm:py-10 max-w-7xl">
      <AppEyebrowLabel
        v-if="props.eyebrow"
        :label="props.eyebrow"
      />

      <h1 class="mt-4 max-w-3xl font-serif font-normal text-highlighted text-3xl sm:text-4xl lg:text-5xl text-balance tracking-tight">
        {{ props.title }}
        <span
          v-if="props.accent"
          class="text-accent"
        >{{ props.accent }}</span>
      </h1>

      <p
        v-if="props.description"
        class="mt-4 max-w-xl font-normal text-muted text-sm sm:text-base text-pretty leading-relaxed"
      >
        {{ props.description }}
      </p>
    </UContainer>
  </section>
</template>
