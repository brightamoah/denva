<script setup lang="ts">
import { storeEditions } from "~/data/store";
import { formatPrice } from "~/utils/formatPrice";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const { count } = useCart();

const featured = storeEditions.find(edition => edition.id === "form-and-limestone") ?? storeEditions[0]!;

useSectionReveal(sectionRef, {
  start: "top 95%",
  stagger: 0.08,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="border-b border-default bg-default"
  >
    <UContainer class="max-w-7xl py-15 sm:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div class="lg:col-span-6">
          <AppEyebrowLabel
            label="The Edition Room"
            data-reveal
          />

          <h1
            data-reveal
            class="mt-6 max-w-2xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.015em] text-highlighted text-balance sm:text-6xl lg:text-7xl"
          >
            Books you can <span class="text-accent">hold.</span>
          </h1>

          <p
            data-reveal
            class="mt-7 max-w-xl text-base font-normal leading-relaxed text-toned text-pretty sm:text-lg"
          >
            A small selection of editions from the atelier. Each is printed once, numbered, and
            never reprinted. When an edition is gone, it stays gone.
          </p>

          <div
            data-reveal
            class="mt-9 flex flex-wrap items-center gap-3"
          >
            <UButton
              label="Browse editions"
              to="#editions"
              color="secondary"
              variant="solid"
              trailing-icon="i-lucide-arrow-down"
              class="min-h-12 cursor-pointer rounded-none px-8 text-[11px] font-medium uppercase tracking-[0.24em] text-primary-950 hover:bg-secondary-400 active:bg-secondary-400"
            />

            <UButton
              :label="count > 0 ? `View cart (${count})` : 'View cart'"
              to="/store/cart"
              color="neutral"
              variant="outline"
              trailing-icon="i-lucide-arrow-right"
              class="min-h-12 cursor-pointer rounded-none px-8 text-[11px] font-normal uppercase tracking-[0.24em]"
            />
          </div>

          <p
            data-reveal
            class="mt-10 max-w-md border-t border-default pt-5 text-[9px] font-normal uppercase leading-relaxed tracking-[0.28em] text-muted"
          >
            Numbered · Slipcased · Shipped insured
          </p>
        </div>

        <article
          data-reveal
          class="lg:col-span-6"
        >
          <div class="border border-default bg-muted/40 p-3 sm:p-4">
            <div class="relative overflow-hidden bg-muted">
              <div class="aspect-4/5 overflow-hidden">
                <NuxtImg
                  :src="featured.image"
                  :alt="featured.alt"
                  width="896"
                  height="1200"
                  format="webp"
                  loading="eager"
                  fetchpriority="high"
                  class="h-full w-full object-cover"
                />
              </div>

              <span class="absolute left-4 top-4 bg-default/90 px-3 py-1.5 text-[9px] font-normal uppercase tracking-[0.24em] text-highlighted backdrop-blur-sm">
                Featured edition
              </span>
            </div>

            <div class="px-2 pb-2 pt-5 sm:px-3">
              <p class="text-[9px] font-normal uppercase tracking-[0.26em] text-muted">
                {{ featured.category }} · {{ featured.edition }}
              </p>

              <div class="mt-2 flex items-start justify-between gap-4">
                <h2 class="font-serif text-2xl font-normal tracking-tight text-highlighted sm:text-3xl">
                  {{ featured.title }}
                </h2>

                <span class="shrink-0 font-serif text-xl font-normal text-highlighted">
                  {{ formatPrice(featured.price) }}
                </span>
              </div>

              <p class="mt-3 max-w-lg text-sm font-normal leading-relaxed text-muted text-pretty">
                {{ featured.description }}
              </p>

              <div class="mt-5">
                <StoreAddToCartButton
                  :edition="featured"
                  variant="solid"
                />
              </div>
            </div>
          </div>
        </article>
      </div>
    </UContainer>
  </section>
</template>
