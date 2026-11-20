<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-default focus:px-4 focus:py-3 focus:text-sm focus:text-highlighted"
    >
      Skip to content
    </a>

    <AppHeader />

    <UMain
      id="main-content"
      class="flex-1"
    >
      <slot />
    </UMain>

    <AppFooter />
  </div>
</template>
