<script setup lang="ts">
const { lines } = useCart();
</script>

<template>
  <div
    v-auto-animate
    :class="!lines.length ? 'place-items-center lg:col-span-12 mx-auto w-full h-full' : ''"
  >
    <div
      v-if="!lines.length"
      class="bg-muted/40 px-6 py-16 border border-default w-full text-center"
    >
      <UIcon
        name="i-lucide:shopping-cart"
        class="size-15 text-secondary"
      />

      <h2 class="mt-6 font-serif font-normal text-highlighted text-4xl">
        Your cart is empty.
      </h2>

      <UButton
        label="Browse our collection"
        to="/store"
        color="secondary"
        variant="solid"
        trailing-icon="i-lucide-arrow-right"
        class="mt-7 px-6 rounded-none min-h-11 font-medium text-[10px] text-primary-950 uppercase tracking-[0.24em] cursor-pointer"
      />
    </div>

    <div v-else>
      <ul
        v-auto-animate
        class="border-default border-t"
      >
        <li
          v-for="line in lines"
          :key="line.id"
          class="py-6 border-default border-b"
        >
          <StoreCartLineItem :line="line" />
        </li>
      </ul>
    </div>
  </div>
</template>
