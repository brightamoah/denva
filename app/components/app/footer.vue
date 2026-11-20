<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";
import { contactEmail, contactPhone } from "~/data/contact";

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
          <span class="font-serif font-normal text-highlighted text-lg uppercase tracking-[0.26em]">
            Denva <span class="text-accent">Books</span>
          </span>

          <span class="font-normal text-[10px] text-muted uppercase tracking-[0.24em]">
            © {{ new Date().getFullYear() }} · Your Stress-Free Publishing Partner
          </span>

          <span class="flex flex-wrap items-center gap-x-3 gap-y-1 font-normal text-[10px] text-muted">
            <a
              :href="`mailto:${contactEmail}`"
              class="hover:text-highlighted transition-colors duration-300"
            >
              {{ contactEmail }}
            </a>

            <span
              aria-hidden="true"
              class="bg-accented w-px h-3"
            />

            <a
              :href="`tel:${contactPhone.replace(/\s/g, '')}`"
              class="hover:text-highlighted transition-colors duration-300"
            >
              {{ contactPhone }}
            </a>

            <span
              aria-hidden="true"
              class="bg-accented w-px h-3"
            />

            <span>Accra, Ghana</span>
          </span>
        </div>
      </template>

      <UNavigationMenu
        :items="items"
        variant="link"
        color="neutral"
        :ui="{
          link: 'text-[10px] font-normal uppercase tracking-[0.22em] text-muted hover:text-highlighted',
        }"
      />

      <template #right>
        <div class="flex items-center gap-5">
          <UButton
            label="Get a quote"
            to="/contact"
            color="secondary"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="px-4 rounded-none min-h-11 font-normal text-[10px] uppercase tracking-[0.22em] cursor-pointer"
          />
        </div>
      </template>
    </UFooter>
  </div>
</template>
