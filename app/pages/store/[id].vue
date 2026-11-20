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
  <section
    id="product-details"
    class="bg-default scroll-mt-24"
  >
    <UContainer class="py-8 sm:py-12 max-w-7xl">
      <NuxtLink
        to="/store"
        class="inline-flex items-center gap-2 font-normal text-[10px] text-muted hover:text-highlighted uppercase tracking-[0.24em] transition-colors duration-200"
      >
        <UIcon
          name="i-lucide-arrow-left"
          class="size-3.5"
          aria-hidden="true"
        />
        Back to store
      </NuxtLink>

      <div class="items-stretch gap-8 lg:gap-12 xl:gap-14 grid grid-cols-1 lg:grid-cols-12 mt-6 sm:mt-8">
        <!-- Left: Product Image strictly aligned with details column height -->
        <div class="flex flex-col lg:col-span-5 h-full">
          <div class="relative bg-muted border border-default w-full h-full min-h-90 sm:min-h-110 lg:min-h-0 overflow-hidden">
            <NuxtImg
              :src="edition.image"
              :alt="edition.alt"
              width="960"
              height="1000"
              format="webp"
              loading="eager"
              class="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        <!-- Right: Arranged product details with full-width bottom Add to Cart button -->
        <div class="flex flex-col justify-between lg:col-span-7 h-full">
          <div>
            <div class="flex flex-wrap justify-between items-center gap-3">
              <UBadge
                color="secondary"
                variant="subtle"
                size="sm"
                class="px-2.5 py-1 rounded-none text-[10px] uppercase tracking-[0.24em]"
              >
                {{ edition.category }}
              </UBadge>

              <span
                v-if="edition.stock > 0"
                class="inline-flex items-center gap-1.5 font-normal text-muted text-xs"
              >
                <span
                  class="bg-emerald-500 rounded-full size-1.5"
                  aria-hidden="true"
                />

                <span>{{ edition.stock <= 4 ? `Only ${edition.stock} copies left` : 'In stock' }}</span>
              </span>

              <span
                v-else
                class="inline-flex items-center gap-1.5 font-normal text-muted text-xs"
              >
                <span
                  class="bg-red-500 rounded-full size-1.5"
                  aria-hidden="true"
                />

                <span>Sold out</span>
              </span>
            </div>

            <h1 class="mt-3 font-serif font-normal text-highlighted lg:text-[2.75rem] text-3xl sm:text-4xl text-balance leading-[1.08] tracking-tight">
              {{ edition.title }}
            </h1>

            <p class="mt-3 font-serif font-normal text-primary dark:text-secondary-300 text-2xl sm:text-3xl">
              {{ formatPrice(edition.price) }}
            </p>

            <div class="my-5 border-default border-t" />

            <p class="font-normal text-muted text-sm sm:text-base text-pretty leading-relaxed">
              {{ edition.description }}
            </p>

            <!-- <dl class="space-y-3 mt-6 pt-5 border-default border-t text-xs">
              <div class="flex justify-between items-start gap-4 py-1 border-default/60 border-b">
                <dt class="font-normal text-[10px] text-muted uppercase tracking-wider">
                  Specification
                </dt>

                <dd class="font-normal text-highlighted text-right">
                  {{ edition.edition }}
                </dd>
              </div>

              <div class="flex justify-between items-start gap-4 py-1 border-default/60 border-b">
                <dt class="font-normal text-[10px] text-muted uppercase tracking-wider">
                  Print Standard
                </dt>

                <dd class="font-normal text-highlighted text-right">
                  Archival cotton stock, high digital technology
                </dd>
              </div>

              <div class="flex justify-between items-start gap-4 py-1 border-default/60 border-b">
                <dt class="font-normal text-[10px] text-muted uppercase tracking-wider">
                  Delivery
                </dt>

                <dd class="font-normal text-highlighted text-right">
                  Direct dispatch in Ghana and international delivery
                </dd>
              </div>

              <div class="flex justify-between items-start gap-4 py-1">
                <dt class="font-normal text-[10px] text-muted uppercase tracking-wider">
                  Publisher
                </dt>

                <dd class="font-normal text-highlighted text-right">
                  Denva Books · Accra, Ghana
                </dd>
              </div>
            </dl> -->
          </div>

          <div class="mt-8 pt-5 border-default border-t">
            <StoreAddToCartButton
              :edition="edition"
              size="xl"
              variant="solid"
              color="primary"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>
