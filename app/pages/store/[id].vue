<script setup lang="ts">
import { storeEditions } from "~/data/store";
import { formatPrice } from "~/utils/formatPrice";

const route = useRoute();

const edition = storeEditions.find(item => item.id === route.params.id);

if (!edition) {
  throw createError({
    statusCode: 404,
    statusMessage: "Book not found",
  });
}

useSeoMeta({
  title: `${edition.title} · Denva Books`,
  description: edition.description,
  ogTitle: `${edition.title} · Denva Books`,
  ogDescription: edition.description,
  ogImage: edition.image,
  ogType: "website",
});
</script>

<template>
  <section class="bg-default">
    <UContainer class="py-10 sm:py-14 max-w-7xl">
      <NuxtLink
        to="/store"
        class="inline-flex items-center gap-2 font-normal text-[10px] text-muted hover:text-highlighted uppercase tracking-[0.24em] transition-colors duration-300"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-3.5"
          aria-hidden="true"
        />
        Back to store
      </NuxtLink>

      <div class="items-start gap-10 lg:gap-16 grid lg:grid-cols-2 mt-8">
        <div class="bg-muted aspect-3/4 overflow-hidden">
          <NuxtImg
            :src="edition.image"
            :alt="edition.alt"
            width="960"
            height="1280"
            format="webp"
            loading="eager"
            class="h-full w-full object-cover"
          />
        </div>

        <div class="lg:pt-4">
          <p class="font-normal text-[10px] text-muted uppercase tracking-[0.28em]">
            {{ edition.category }}
          </p>

          <h1 class="mt-3 font-serif font-normal text-highlighted text-3xl sm:text-4xl lg:text-5xl text-balance tracking-tight">
            {{ edition.title }}
          </h1>

          <p class="mt-4 font-serif font-normal text-highlighted text-2xl">
            {{ formatPrice(edition.price) }}
          </p>

          <p class="mt-5 max-w-md font-normal text-muted text-sm sm:text-base text-pretty leading-relaxed">
            {{ edition.description }}
          </p>

          <p class="mt-4 font-normal text-muted text-xs">
            {{ edition.edition }}
          </p>

          <div class="mt-8">
            <StoreAddToCartButton
              :edition="edition"
              variant="solid"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
