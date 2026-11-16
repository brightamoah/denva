<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: "Home",
    to: "/",
    active: route.path === "/",
  },
  {
    label: "Our Services",
    to: "/services",
    active: route.path.startsWith("/services"),
  },
  {
    label: "Shop",
    to: "/store",
    active: route.path.startsWith("/store"),
  },
  {
    label: "About Us",
    to: "/about",
    active: route.path.startsWith("/about"),
  },
  {
    label: "Contact Us",
    to: "/contact",
    active: route.path.startsWith("/contact"),
  },
]);

const isStoreRoute = computed(() => route.path.startsWith("/store"));

const scrolled = ref(false);

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll);
});

const headerToggle = computed(() => ({
  color: "neutral" as const,
  variant: "ghost" as const,
  class: "rounded-none",
}));
</script>

<template>
  <UHeader
    title="Denva Books"
    mode="slideover"
    toggle-side="left"
    :toggle="headerToggle"
    :menu="{ side: 'left', overlay: true }"
    :ui="{
      root: [
        'sticky top-0 z-50 border-b border-default/70 transition-[height,background-color,box-shadow] duration-500 ease-out',
        scrolled
          ? 'h-16 bg-default/90 shadow-sm backdrop-blur-xl'
          : 'h-20 bg-default/70 backdrop-blur-md',
      ],
      container: 'max-w-7xl',
      title: 'min-w-0',
      content:
        'w-[78vw] max-w-[78vw] bg-default sm:w-80 sm:max-w-sm will-change-transform transform-gpu data-[state=closed]:animate-[slide-out-to-left_300ms_cubic-bezier(0.16,1,0.3,1)]',
      overlay:
        'bg-primary-950/60 backdrop-blur-[2px] will-change-[opacity] data-[state=closed]:animate-[fade-out_250ms_cubic-bezier(0.16,1,0.3,1)]',
    }"
  >
    <template #title>
      <div class="flex items-center gap-2 min-w-0">
        <NuxtImg
          src="/images/logo.png"
          alt="logo"
          class="size-10 sm:size-16 object-contain transition-[width,height] duration-500 shrink-0"
          :class="scrolled ? 'sm:size-12' : 'sm:size-16'"
        />

        <p class="min-w-0 leading-none">
          <span
            class="block font-serif font-semibold text-primary truncate uppercase transition-[font-size,letter-spacing] duration-500"
            :class="scrolled
              ? 'text-sm tracking-[0.18em] sm:text-base sm:tracking-[0.26em]'
              : 'text-base tracking-[0.16em] sm:text-xl sm:tracking-[0.26em]'"
          >
            Denva <span class="text-secondary">Books</span>
          </span>
        </p>
      </div>
    </template>

    <UNavigationMenu
      :items="items"
      variant="link"
      highlight
      color="primary"
      class="mx-auto"
      :ui="{
        link: 'px-3 text-xs font-light uppercase tracking-[0.2em] transition-colors duration-300 hover:text-highlighted after:-bottom-1',
        list: 'gap-2',
      }"
    />

    <template #right>
      <div class="flex items-center gap-3 shrink-0">
        <div v-if="isStoreRoute">
          <UChip
            v-auto-animate
            inset
            size="3xl"
            text="17"
            color="secondary"
            :ui="{
              base: 'text-[10px] text-center size-4',
            }"
          >
            <UButton
              v-auto-animate
              icon="i-lucide:shopping-cart"
              variant="link"
              color="neutral"
              to="/store/cart"
            />
          </UChip>
        </div>

        <UButton
          label="Book A Meeting"
          to="/contact"
          color="secondary"
          variant="outline"
          class="hidden sm:inline-flex hover:bg-secondary/10 px-4 rounded-none ring-secondary/40 min-h-9 font-normal text-[10px] text-secondary uppercase tracking-[0.22em] cursor-pointer"
        />

        <UColorModeButton
          color="neutral"
          variant="link"
          class="rounded-none text-muted hover:text-highlighted"
        />
      </div>
    </template>

    <template #body>
      <div class="flex flex-col gap-2 py-6">
        <NuxtLink
          v-for="item in items"
          :key="item.label"
          :to="item.to"
          class="block px-4 py-3 border-l-2 font-medium text-sm uppercase tracking-[0.2em] transition-colors duration-200"
          :class="item.active
            ? 'border-secondary bg-secondary/10 text-primary dark:text-secondary-300'
            : 'border-transparent text-muted hover:text-highlighted hover:bg-elevated'"
        >
          {{ item.label }}
        </NuxtLink>

        <UButton
          label="Book A Meeting"
          to="/contact"
          color="secondary"
          block
          trailing-icon="i-lucide-arrow-right"
          class="mt-6 rounded-none min-h-11 text-[10px] uppercase tracking-[0.26em]"
        />
      </div>
    </template>
  </UHeader>
</template>
