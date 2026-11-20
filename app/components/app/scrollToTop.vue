<script setup lang="ts">
const show = ref(false);

function checkScroll() {
  if (typeof window === "undefined") return;
  show.value = window.scrollY > 300;
}

function scrollToTop() {
  if (typeof window === "undefined") return;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

onMounted(() => {
  checkScroll();
  window.addEventListener("scroll", checkScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-3"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-3"
  >
    <button
      v-if="show"
      type="button"
      aria-label="Scroll to top of page"
      class="fixed bottom-6 right-6 z-40 flex size-11 items-center justify-center border border-default bg-default/90 text-highlighted shadow-lg backdrop-blur transition-all duration-300 hover:border-secondary hover:text-secondary focus-visible:outline-2 focus-visible:outline-secondary focus-visible:outline-offset-2 cursor-pointer"
      @click="scrollToTop"
    >
      <UIcon
        name="i-lucide-arrow-up"
        class="size-5"
        aria-hidden="true"
      />
    </button>
  </Transition>
</template>
