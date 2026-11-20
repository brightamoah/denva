<script setup lang="ts">
import type { StoreEdition } from "~/data/store";
import { formatPrice } from "~/utils/formatPrice";

interface Props {
  edition: StoreEdition;
  compact?: boolean;
  variant?: "solid" | "outline";
}

const props = withDefaults(defineProps<Props>(), {
  compact: false,
  variant: "outline",
});

const toast = useToast();
const { add } = useCart();

const buttonLabel = computed(() => {
  if (props.edition.stock === 0) return "Sold out";
  return props.compact ? "Add" : "Add to cart";
});

const buttonClass = computed(() => {
  if (props.variant === "solid") {
    return "min-h-11 cursor-pointer rounded-none px-6 text-[10px] font-medium uppercase tracking-[0.24em] text-primary-950 hover:bg-secondary-400 active:bg-secondary-400";
  }

  return "min-h-11 cursor-pointer rounded-none px-5 text-[10px] font-normal uppercase tracking-[0.22em] text-secondary-700 ring-secondary-700/40 hover:bg-secondary-700/5 dark:text-secondary-300 dark:ring-secondary-300/30 dark:hover:bg-secondary-300/10";
});

function handleAdd() {
  // eslint-disable-next-line no-console
  console.log("DENVA_ADD_CLICK", props.edition.id);
  if (props.edition.stock === 0) return;

  add(props.edition);

  toast.add({
    title: "Added to the cart",
    description: `${props.edition.title} · ${formatPrice(props.edition.price)}`,
    color: "primary",
    icon: "i-lucide-check",
  });
}
</script>

<template>
  <UButton
    :label="buttonLabel"
    :disabled="props.edition.stock === 0"
    :color="props.variant === 'solid' ? 'secondary' : 'neutral'"
    :variant="props.variant"
    :aria-label="props.edition.stock === 0
      ? `${props.edition.title} is sold out`
      : `Add to cart: ${props.edition.title}`"
    :class="buttonClass"
    @click="handleAdd"
  />
</template>
