<script setup lang="ts">
interface Props {
  id?: string;
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  id: "page-header",
  eyebrow: "",
  accent: "",
  description: "",
});
</script>

<template>
  <section
    :id="props.id"
    class="bg-default border-default border-b scroll-mt-24"
  >
    <UContainer class="py-8 sm:py-10 max-w-7xl">
      <AppEyebrowLabel
        v-if="props.eyebrow"
        :label="props.eyebrow"
      />

      <h1 class="mt-4 max-w-3xl font-serif font-normal text-highlighted text-3xl sm:text-4xl lg:text-5xl text-balance tracking-tight">
        {{ props.title }}
        <span
          v-if="props.accent"
          class="text-accent ml-1.5"
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
