<script setup lang="ts">
import type { StoreEdition } from "~/data/store";
import { formatPrice } from "~/utils/formatPrice";

interface Props {
  edition: StoreEdition;
}

const props = defineProps<Props>();
</script>

<template>
  <article class="group flex flex-col justify-between bg-default hover:shadow-xs p-3 sm:p-4 border border-default hover:border-accented transition-all duration-300">
    <NuxtLink
      :to="`/store/${props.edition.id}`"
      class="block focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
    >
      <div class="bg-muted aspect-3/4 overflow-hidden">
        <NuxtImg
          :src="props.edition.image"
          :alt="props.edition.alt"
          width="600"
          height="800"
          format="webp"
          loading="lazy"
          class="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
      </div>

      <div class="mt-3">
        <p class="font-normal text-[10px] text-muted uppercase tracking-[0.2em]">
          {{ props.edition.category }}
        </p>

        <h2 class="mt-1 font-serif font-normal text-highlighted group-hover:text-primary text-sm sm:text-base line-clamp-2 leading-snug transition-colors duration-300">
          {{ props.edition.title }}
        </h2>

        <p class="mt-1.5 font-normal text-toned text-xs sm:text-sm">
          {{ formatPrice(props.edition.price) }}
        </p>
      </div>
    </NuxtLink>

    <div class="mt-3 pt-3 border-default border-t">
      <StoreAddToCartButton
        :edition="props.edition"
        :compact="false"
        variant="solid"
        class="justify-center w-full min-h-9 text-[10px] tracking-[0.18em]"
      />
    </div>
  </article>
</template>
