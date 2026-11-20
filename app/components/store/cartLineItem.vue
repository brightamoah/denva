<script setup lang="ts">
import type { CartLine } from "~/composables/useCart";
import { formatPrice } from "~/utils/formatPrice";

interface Props {
  line: CartLine;
}

const props = defineProps<Props>();

const { remove, setQuantity } = useCart();

const lineTotal = computed(() => props.line.price * props.line.quantity);
const openDeleteModal = ref(false);
</script>

<template>
  <div class="flex gap-5 sm:gap-6">
    <div class="bg-muted w-20 sm:w-24 overflow-hidden shrink-0">
      <NuxtImg
        :src="props.line.image"
        :alt="props.line.alt"
        width="240"
        height="320"
        format="webp"
        loading="lazy"
        class="w-full h-full object-cover aspect-3/4"
      />
    </div>

    <div class="flex sm:flex-row flex-col flex-1 sm:justify-between items-center gap-4 min-w-0">
      <div class="flex flex-col gap-3 min-w-0">
        <!-- <p class="font-normal text-[9px] text-muted uppercase tracking-[0.24em]">
          {{ props.line.edition }}
        </p> -->

        <h2 class="mt-1.5 font-serif font-normal text-highlighted text-xl sm:text-2xl tracking-tight">
          {{ props.line.title }}
        </h2>

        <p class="mt-2 font-normal text-muted text-sm">
          {{ formatPrice(props.line.price) }}
        </p>
      </div>

      <div class="flex sm:flex-col flex-wrap sm:justify-between items-center sm:items-end gap-4 shrink-0">
        <div
          class="flex items-center border border-default"
          role="group"
          :aria-label="`Quantity for ${props.line.title}`"
        >
          <UButton
            icon="i-lucide-minus"
            color="neutral"
            variant="ghost"
            size="sm"
            :disabled="props.line.quantity <= 1"
            :aria-label="`Decrease quantity for ${props.line.title}`"
            class="flex justify-center items-center rounded-none size-11 cursor-pointer"
            @click="setQuantity(props.line.id, props.line.quantity - 1)"
          />

          <span
            class="w-8 tabular-nums text-highlighted text-sm text-center"
            aria-live="polite"
          >
            {{ props.line.quantity }}
          </span>

          <UButton
            icon="i-lucide-plus"
            color="neutral"
            variant="ghost"
            size="sm"
            :disabled="props.line.quantity >= 9"
            :aria-label="`Increase quantity for ${props.line.title}`"
            class="flex justify-center items-center rounded-none size-11 text-center cursor-pointer"
            @click="setQuantity(props.line.id, props.line.quantity + 1)"
          />
        </div>

        <div class="flex items-center gap-4">
          <span class="font-serif font-normal text-highlighted text-lg">
            {{ formatPrice(lineTotal) }}
          </span>

          <UButton
            icon="i-lucide-trash-2"
            color="error"
            variant="ghost"
            size="sm"
            :aria-label="`Remove ${props.line.title} from cart`"
            class="flex justify-center items-center rounded-none"
            :ui="{
              leadingIcon: 'size-5',
            }"
            @click="openDeleteModal = true"
          />

          <AppConfirmation
            v-model:open="openDeleteModal"
            type="delete"
            title="Remove Item"
            :description="`Are you sure you want to remove ${props.line.title} from your cart?`"
            @confirm="remove(props.line.id)"
          >
            <template #description>
              <p>
                Are you sure you want to remove <span class="font-semibold">{{ props.line.title }}</span> from your cart?
              </p>
            </template>
          </AppConfirmation>
        </div>
      </div>
    </div>
  </div>
</template>
