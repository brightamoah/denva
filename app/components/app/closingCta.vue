<script setup lang="ts">
interface Props {
  eyebrow?: string;
  title?: string;
  accent?: string;
  description?: string;
  label?: string;
  to?: string;
  note?: string;
}

const props = withDefaults(defineProps<Props>(), {
  eyebrow: "Start Your Book",
  title: "Ready to publish?",
  accent: "Let's talk.",
  description:
    "Tell us what you have, whether that is an idea, a manuscript or a finished file, and what you want the book to do. We will explain the next step and give you a clear quote.",
  label: "Get a quote",
  to: "/contact",
  note: "Accra, Ghana · denvabooksgh@gmail.com",
});

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 84%",
  stagger: 0.08,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="isolate relative bg-primary-800 overflow-hidden text-primary-50"
  >
    <UContainer class="relative py-20 max-w-4xl text-center">
      <p
        data-reveal
        class="flex justify-center items-center gap-3 font-normal text-[10px] text-secondary uppercase tracking-[0.34em]"
      >
        <span
          class="bg-secondary w-8 h-px"
          aria-hidden="true"
        />

        {{ props.eyebrow }}

        <span
          class="bg-secondary w-8 h-px"
          aria-hidden="true"
        />
      </p>

      <h2
        data-reveal
        class="mt-6 font-serif font-normal text-primary-50 text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05] tracking-tight"
      >
        {{ props.title }} <span class="text-secondary">{{ props.accent }}</span>
      </h2>

      <p
        data-reveal
        class="mx-auto mt-6 max-w-xl font-normal text-primary-100/80 text-sm sm:text-base text-pretty leading-relaxed"
      >
        {{ props.description }}
      </p>

      <div
        data-reveal
        class="flex justify-center mt-10"
      >
        <UButton
          :label="props.label"
          :to="props.to"
          color="secondary"
          variant="solid"
          trailing-icon="i-lucide-arrow-right"
          class="px-9 rounded-none focus-visible:outline-3 focus-visible:outline-secondary-100 min-h-12 font-medium text-[11px] text-primary-950 uppercase tracking-[0.24em]"
        />
      </div>

      <p
        v-if="props.note"
        data-reveal
        class="mt-10 font-normal text-[9px] text-primary-100/70 uppercase tracking-[0.3em]"
      >
        {{ props.note }}
      </p>
    </UContainer>
  </section>
</template>
