<script setup lang="ts">
interface Props {
  label: string;
  tone?: "muted" | "light" | "secondary";
}

const props = withDefaults(defineProps<Props>(), {
  tone: "muted",
});

const toneClass = computed(() => {
  if (props.tone === "light") return "text-primary-100/75";
  if (props.tone === "secondary") return "text-secondary";
  return "text-muted";
});
</script>

<template>
  <p
    class="flex items-center gap-3 font-normal text-[10px] uppercase tracking-[0.32em]"
    :class="toneClass"
  >
    <span
      class="bg-secondary w-8 h-px"
      aria-hidden="true"
    />

    {{ label }}
  </p>
</template>
