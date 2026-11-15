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
      <div class="flex items-center gap-2 min-w-0 align-middle">
        <NuxtImg
          src="/images/logo.png"
          alt="logo"
          class="size-13 sm:size-16 object-contain shrink-0"
        />

        <p class="flex flex-col min-w-0 leading-none">
          <span
            class="font-serif font-semibold text-primary uppercase tracking-[0.26em] transition-[font-size,letter-spacing] duration-500"
            :class="scrolled ? 'text-base' : 'text-lg sm:text-xl'"
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
      <UButton
        label="Commission"
        to="/contact"
        color="secondary"
        variant="outline"
        class="hidden sm:inline-flex hover:bg-secondary-700/5 dark:hover:bg-secondary-300/10 px-4 rounded-none ring-secondary-700/40 dark:ring-secondary-300/30 min-h-9 font-normal text-[10px] text-secondary-700 dark:text-secondary-300 uppercase tracking-[0.22em] cursor-pointer"
      />

      <UColorModeButton
        color="neutral"
        variant="link"
        class="hidden sm:inline-flex rounded-none text-muted hover:text-highlighted"
      />
    </template>

    <template #body>
      <div class="flex flex-col gap-8 py-4">
        <UNavigationMenu
          :items="items"
          orientation="vertical"
          highlight
          variant="pill"
          color="primary"
          :ui="{
            link: 'py-3 text-xs font-light uppercase tracking-[0.24em]',
          }"
        />

        <UButton
          label="Commission a Volume"
          to="/contact"
          color="secondary"
          variant="solid"
          trailing-icon="i-lucide-arrow-right"
          block
          class="rounded-none min-h-11 font-medium text-[10px] text-primary-950 uppercase tracking-[0.26em]"
        />

        <p class="text-[10px] text-muted uppercase leading-relaxed tracking-[0.26em]">
          By introduction only
          <span class="mx-2 text-secondary-700 dark:text-secondary-300">·</span>
          London &amp; New York
        </p>
      </div>
    </template>
  </UHeader>
</template>
