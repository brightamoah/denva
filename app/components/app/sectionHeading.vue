<script setup lang="ts">
interface Props {
  eyebrow: string;
  description?: string;
  align?: "start" | "center";
  showEyebrow?: boolean;
  showDescription?: boolean;
}

const {
  align = "start",
  description = "",
  showEyebrow = true,
} = defineProps<Props>();

const isCentered = computed(() => align === "center");
</script>

<template>
  <div :class="isCentered ? 'text-center' : ''">
    <AppEyebrowLabel
      v-if="showEyebrow"
      :label="eyebrow"
      :class="isCentered ? 'justify-center' : ''"
    />

    <h2
      class="mt-5 font-serif text-highlighted text-4xl sm:text-5xl text-balance leading-[1.05] tracking-tight"
      :class="isCentered ? 'mx-auto max-w-3xl' : 'max-w-2xl'"
    >
      <slot />
    </h2>

    <p
      v-if="description"
      class="mt-6 max-w-xl font-normal text-muted text-sm sm:text-base text-pretty leading-relaxed"
      :class="isCentered ? 'mx-auto' : ''"
    >
      {{ description }}
    </p>
  </div>
</template>
