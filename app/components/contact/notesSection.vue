<script setup lang="ts">
import { contactEmail, contactNotes } from "~/data/contact";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.07,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="border-b border-default bg-default"
  >
    <UContainer class="max-w-7xl py-15">
      <AppSectionHeading
        eyebrow="Before You Write"
        description="Three short notes that make a first message easier to answer well."
        data-reveal
      >
        A few things <span class="text-accent">worth knowing.</span>
      </AppSectionHeading>

      <div class="mt-10 grid gap-8 md:grid-cols-3">
        <article
          v-for="note in contactNotes"
          :key="note.title"
          data-reveal
          class="border-t border-default pt-5"
        >
          <h3 class="font-serif text-2xl font-normal tracking-tight text-highlighted">
            {{ note.title }}
          </h3>

          <p class="mt-3 text-sm font-normal leading-relaxed text-muted text-pretty">
            {{ note.description }}
          </p>
        </article>
      </div>

      <div
        data-reveal
        class="mt-12 flex flex-col gap-5 border-t border-default pt-6 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="max-w-xl text-sm font-normal leading-relaxed text-muted text-pretty">
          You do not need a finished manuscript or a full proposal to start a conversation.
        </p>

        <UButton
          :label="contactEmail"
          :to="`mailto:${contactEmail}`"
          color="secondary"
          variant="outline"
          trailing-icon="i-lucide-arrow-up-right"
          class="min-h-11 w-fit cursor-pointer rounded-none px-6 text-[10px] font-normal uppercase tracking-[0.2em] text-secondary-700 ring-secondary-700/40 hover:bg-secondary-700/5 dark:text-secondary-300 dark:ring-secondary-300/30 dark:hover:bg-secondary-300/10"
        />
      </div>
    </UContainer>
  </section>
</template>
