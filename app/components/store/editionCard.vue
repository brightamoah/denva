<script setup lang="ts">
import type { StoreEdition } from "~/data/store";
import { formatPrice } from "~/utils/formatPrice";

interface Props {
  edition: StoreEdition;
}

const props = defineProps<Props>();
</script>

<template>
  <article class="group flex h-full flex-col">
    <div class="relative overflow-hidden bg-muted">
      <div class="aspect-3/4 overflow-hidden">
        <NuxtImg
          :src="props.edition.image"
          :alt="props.edition.alt"
          width="720"
          height="960"
          format="webp"
          loading="lazy"
          class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-primary-950/40 to-transparent"
      />

      <span class="absolute left-4 top-4 font-serif text-sm text-primary-50/90">
        {{ props.edition.category }}
      </span>
    </div>

    <div class="flex flex-1 flex-col border-t border-default pt-4">
      <p class="text-[9px] font-normal uppercase tracking-[0.24em] text-muted">
        {{ props.edition.edition }}
      </p>

      <h3 class="mt-1.5 font-serif text-xl font-normal tracking-tight text-highlighted transition-colors duration-300 group-hover:text-primary dark:group-hover:text-secondary-300 sm:text-2xl">
        {{ props.edition.title }}
      </h3>

      <p class="mt-2 text-sm font-normal leading-relaxed text-muted text-pretty">
        {{ props.edition.description }}
      </p>

      <div class="mt-auto flex items-center justify-between gap-4 pt-5">
        <span class="font-serif text-lg font-normal text-highlighted">
          {{ formatPrice(props.edition.price) }}
        </span>

        <StoreAddToCartButton
          :edition="props.edition"
          compact
        />
      </div>
    </div>
  </article>
</template>
