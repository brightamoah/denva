<script setup lang="ts">
import { formatPrice } from "~/utils/formatPrice";

const { subtotal } = useCart();
</script>

<template>
  <aside class="lg:top-28 lg:sticky lg:self-start bg-muted/40 p-6 border border-default">
    <h2 class="font-serif font-normal text-highlighted text-2xl tracking-tight">
      Order summary
    </h2>

    <dl class="space-y-4 mt-6 pt-5 border-default border-t text-sm">
      <div class="flex justify-between items-center gap-4">
        <dt class="font-normal text-muted">
          Subtotal
        </dt>

        <dd class="font-normal text-highlighted">
          {{ formatPrice(subtotal) }}
        </dd>
      </div>

      <div class="flex justify-between items-center gap-4">
        <dt class="font-normal text-muted">
          Delivery
        </dt>

        <dd class="font-normal text-highlighted">
          Calculated at invoice
        </dd>
      </div>

      <div class="flex justify-between items-center gap-4 pt-4 border-default border-t">
        <dt class="font-serif font-normal text-highlighted text-lg">
          Total
        </dt>

        <dd class="font-serif font-normal text-highlighted text-lg">
          {{ formatPrice(subtotal) }}
        </dd>
      </div>
    </dl>

    <UButton
      label="Request an invoice"
      to="/contact?topic=Edition%20purchase"
      color="secondary"
      variant="solid"
      trailing-icon="i-lucide-arrow-right"
      class="justify-center hover:bg-secondary-400 active:bg-secondary-400 mt-7 px-6 rounded-none w-full min-h-12 font-medium text-[10px] text-primary-950 uppercase tracking-[0.24em] cursor-pointer"
    />

    <p class="mt-4 font-normal text-muted text-xs text-pretty leading-relaxed">
      Checkout is completed by invoice so that delivery, insurance, and any bespoke presentation can
      be arranged properly.
    </p>
  </aside>
</template>
