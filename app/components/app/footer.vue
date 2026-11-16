<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  { label: "Services", to: "/services" },
  { label: "Store", to: "/store" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];
</script>

<template>
  <div class="bg-default">
    <UFooter
      :ui="{
        container: 'max-w-7xl py-10 sm:py-12',
      }"
    >
      <template #left>
        <div class="flex flex-col gap-2">
          <span class="font-serif font-light text-highlighted text-lg uppercase tracking-[0.26em]">
            Denva <span class="text-secondary-700 dark:text-secondary-300">Books</span>
          </span>

          <span class="font-light text-[10px] text-muted uppercase tracking-[0.24em]">
            © {{ new Date().getFullYear() }} · Bespoke Publishing &amp; Ghostwriting
          </span>
        </div>
      </template>

      <UNavigationMenu
        :items="items"
        variant="link"
        color="neutral"
        :ui="{
          link: 'text-[10px] font-light uppercase tracking-[0.22em] text-muted hover:text-highlighted',
        }"
      />

      <template #right>
        <div class="flex items-center gap-5">
          <UButton
            label="Inquire"
            to="/contact"
            color="secondary"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="hover:bg-secondary-700/5 dark:hover:bg-secondary-300/10 px-4 rounded-none ring-secondary-700/40 dark:ring-secondary-300/30 min-h-11 font-light text-[10px] text-secondary-700 dark:text-secondary-300 uppercase tracking-[0.22em] cursor-pointer"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>
