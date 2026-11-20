<script setup lang="ts">
import { teamRoles } from "~/data/about";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
// const description = "A ghostwriting project is handled by a small team. The people assigned depend on the book.";

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.07,
});
</script>

<template>
  <section
    id="project-team"
    ref="sectionRef"
    class="bg-default border-default border-b scroll-mt-24"
  >
    <UContainer class="py-15 max-w-7xl">
      <div class="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-6">
        <AppSectionHeading
          eyebrow="Your Project Team"
          :show-eyebrow="false"
          data-reveal
        >
          The people behind <span class="text-accent">your book.</span>
        </AppSectionHeading>
      </div>

      <div class="gap-x-10 gap-y-8 grid sm:grid-cols-2 lg:grid-cols-4 mt-10">
        <article
          v-for="role in teamRoles"
          :key="role.role"
          data-reveal
          class="pt-5 border-default border-t"
        >
          <h3 class="font-serif font-normal text-highlighted text-xl tracking-tight">
            {{ role.role }}
          </h3>

          <p class="mt-2 font-normal text-muted text-sm text-pretty leading-relaxed">
            {{ role.description }}
          </p>
        </article>
      </div>
    </UContainer>
  </section>
</template>
