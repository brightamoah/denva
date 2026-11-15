<script setup lang="ts">
import { marqueeItems } from "~/data/home";
</script>

<template>
  <div class="bg-primary-950 py-4 border-primary-50/10 border-t text-primary-100">
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
        <span class="font-serif font-light text-primary-100 text-base tracking-wide whitespace-nowrap">
          {{ label }}
        </span>

        <span
          aria-hidden="true"
          class="bg-secondary/50 w-px h-3"
        />
      </div>
    </UMarquee>
  </div>
</template>
