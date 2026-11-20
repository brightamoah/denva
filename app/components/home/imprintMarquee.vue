<script setup lang="ts">
import { marqueeItems } from "~/data/home";
</script>

<template>
  <div
    id="imprint"
    class="bg-primary-800 py-4 border-primary-50/10 border-t text-primary-100 scroll-mt-24"
  >
    <UMarquee
      pause-on-hover
      :repeat="4"
      :overlay="false"
      :ui="{
        root: '[--duration:56s] [--gap:--spacing(12)]',
        content: 'items-center',
      }"
    >
      <div
        v-for="label in marqueeItems"
        :key="label"
        class="inline-flex items-center gap-12"
      >
        <span class="font-serif font-normal text-primary-100 text-base tracking-wide whitespace-nowrap">
          {{ label }}
        </span>

        <span
          aria-hidden="true"
          class="bg-secondary w-0.5 h-3"
        />
      </div>
    </UMarquee>
  </div>
</template>
