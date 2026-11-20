<script setup lang="ts">
import type { StoreEdition } from "~/data/store";
import { formatPrice } from "~/utils/formatPrice";

interface Props {
  edition: StoreEdition;
  compact?: boolean;
  size?: SizeType;
  variant?: VariantType;
  color?: ColorType;
}

const {
  compact = false,
  size = "md",
  variant = "solid",
  color = "primary",
  edition,
} = defineProps<Props>();

const toast = useToast();
const { add, decrement, getQuantity } = useCart();

const quantityInCart = computed(() => getQuantity(edition.id));

const isSoldOut = computed(() => edition.stock === 0);
const isMaxStock = computed(() => edition.stock !== undefined && quantityInCart.value >= edition.stock);

const containerHeightClass = computed(() => {
  if (size === "xl") return "min-h-12 sm:min-h-14";
  if (size === "lg") return "min-h-11";
  if (size === "sm") return "min-h-8";
  return "min-h-9 sm:min-h-10";
});

const iconSizeClass = computed(() => {
  if (size === "xl") return "size-5";
  return "size-4";
});

const fontSizeClass = computed(() => {
  if (size === "xl") return "text-xs sm:text-sm tracking-[0.2em]";
  return "text-[10px] sm:text-xs tracking-[0.16em]";
});

function handleInitialAdd() {
  if (isSoldOut.value) return;

  add(edition);

  toast.add({
    title: "Added to cart",
    description: `${edition.title} · ${formatPrice(edition.price)}`,
    color: "primary",
    icon: "i-lucide-check",
  });
}

function handleDecrement() {
  decrement(edition.id);
}

function handleIncrement() {
  if (isMaxStock.value) return;
  add(edition);
}
</script>

<template>
  <div
    v-auto-animate
    class="w-full"
  >
    <!-- State 1: Item is in cart -> Stepper: [-] {{ quantity }} [+] -->

    <UFieldGroup
      v-if="quantityInCart > 0"
      class="w-full"
    >
      <UButton
        icon="i-lucide-minus"
        :variant
        color="primary"
        class="flex flex-1 justify-center items-center rounded-none"
        @click.stop.prevent="handleDecrement"
      />

      <p class="flex flex-1 justify-center items-center font-medium tabular-nums text-base">
        {{ quantityInCart }}
      </p>

      <UButton
        icon="i-lucide-plus"
        variant="solid"
        color="primary"
        class="flex flex-1 justify-center items-center rounded-none"
        @click.stop.prevent="handleIncrement"
      />
    </UFieldGroup>

    <!-- <div
      v-if="quantityInCart > 0"
      class="flex justify-between items-center bg-primary border border-primary w-full text-primary-50 transition-all duration-200 select-none"
      :class="containerHeightClass"
    >
      <button
        type="button"
        :aria-label="`Decrease quantity of ${edition.title}`"
        class="flex justify-center items-center hover:bg-primary-600 active:bg-primary-700 px-2 sm:px-3 focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-1 min-w-8 sm:min-w-10 h-full text-primary-100 hover:text-white transition-colors duration-150 cursor-pointer"
        @click.stop.prevent="handleDecrement"
      >
        <UIcon
          name="i-lucide-minus"
          :class="iconSizeClass"
          aria-hidden="true"
        />
      </button>

      <div
        class="flex items-center gap-1.5 px-1 sm:px-2 font-medium tabular-nums"
        :class="fontSizeClass"
      >
        <span class="font-semibold">{{ quantityInCart }}</span>

        <span
          v-if="!compact"
          class="font-normal text-[10px] text-primary-200/90 uppercase"
          :class="size === 'xl' ? 'inline' : 'hidden sm:inline'"
        >
          in cart
        </span>
      </div>

      <button
        type="button"
        :disabled="isMaxStock"
        :aria-label="`Increase quantity of ${edition.title}`"
        class="flex justify-center items-center hover:bg-primary-600 active:bg-primary-700 disabled:opacity-40 px-2 sm:px-3 focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-1 min-w-8 sm:min-w-10 h-full text-primary-100 hover:text-white transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed"
        @click.stop.prevent="handleIncrement"
      >
        <UIcon
          name="i-lucide-plus"
          :class="iconSizeClass"
          aria-hidden="true"
        />
      </button>
    </div> -->

    <!-- State 2: Item not in cart (or sold out) -> Standard Button -->
    <UButton
      v-else
      block
      :disabled="isSoldOut"
      :color="color"
      :variant="variant"
      :aria-label="isSoldOut ? `${edition.title} is sold out` : `Add to cart: ${edition.title}`"
      class="justify-center rounded-none w-full font-medium uppercase cursor-pointer"
      :class="[containerHeightClass, fontSizeClass]"
      @click.stop.prevent="handleInitialAdd"
    >
      <template #leading>
        <UIcon
          v-if="!isSoldOut"
          name="i-lucide-shopping-cart"
          :class="iconSizeClass"
          class="mr-1"
          aria-hidden="true"
        />
      </template>

      <span>{{ isSoldOut ? 'Sold out' : (compact ? 'Add' : 'Add to cart') }}</span>
    </UButton>
  </div>
</template>
