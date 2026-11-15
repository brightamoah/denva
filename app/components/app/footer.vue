<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items: NavigationMenuItem[] = [
  { label: "Disciplines", to: "/services" },
  { label: "Editions", to: "/store" },
  { label: "Atelier", to: "/about" },
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
          <span class="font-serif text-lg font-light uppercase tracking-[0.26em] text-highlighted">
            Denva <span class="text-secondary-700 dark:text-secondary-300">Books</span>
          </span>

          <span class="text-[10px] font-light uppercase tracking-[0.24em] text-muted">
            © {{ new Date().getFullYear() }} · Bespoke Publishing &amp; Ghostwriting
          </span>

          <span class="text-[9px] font-light uppercase tracking-[0.24em] text-muted">
            Set in Cormorant Garamond &amp; Jost
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
          <span class="hidden text-[9px] font-light uppercase tracking-[0.22em] text-muted lg:block">
            London &amp; New York
          </span>

          <UButton
            label="Inquire"
            to="/contact"
            color="secondary"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="min-h-11 cursor-pointer rounded-none px-4 text-[10px] font-light uppercase tracking-[0.22em] text-secondary-700 ring-secondary-700/40 hover:bg-secondary-700/5 dark:text-secondary-300 dark:ring-secondary-300/30 dark:hover:bg-secondary-300/10"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>
