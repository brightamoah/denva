<script setup lang="ts">
import type { StoreEdition } from "~/data/store";
import { formatPrice } from "~/utils/formatPrice";

interface Props {
  edition: StoreEdition;
}

const props = defineProps<Props>();
</script>

<template>
  <NuxtLink
    :to="`/store/${props.edition.id}`"
    class="group flex flex-col focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
  >
    <div class="bg-muted aspect-3/4 overflow-hidden">
      <NuxtImg
        :src="props.edition.image"
        :alt="props.edition.alt"
        width="720"
        height="960"
        format="webp"
        loading="lazy"
        class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>

    <h2 class="mt-3 font-serif font-normal text-highlighted text-base leading-snug transition-colors duration-300 group-hover:text-primary">
      {{ props.edition.title }}
    </h2>

    <p class="mt-1 font-normal text-muted text-sm">
      {{ formatPrice(props.edition.price) }}
    </p>
  </NuxtLink>
</template>
