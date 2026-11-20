<script setup lang="ts">
import { serviceFaqs } from "~/data/services";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.06,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-muted/60 border-default border-b"
  >
    <UContainer class="py-15 max-w-7xl">
      <div class="gap-10 lg:gap-20 grid lg:grid-cols-12">
        <div class="lg:top-28 lg:sticky lg:self-start lg:col-span-5">
          <AppSectionHeading
            eyebrow="FAQs"
            description="Short answers to some frequently asked questions."
            data-reveal
          >
            The things people <span class="text-accent">ask first.</span>
          </AppSectionHeading>

          <UButton
            label="Ask us directly"
            to="/contact"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-arrow-right"
            class="mt-8 px-6 rounded-none min-h-11 font-normal text-[10px] uppercase tracking-[0.24em] cursor-pointer"
            data-reveal
          />
        </div>

        <div
          data-reveal
          class="lg:col-span-7"
        >
          <UAccordion
            :items="serviceFaqs"
            type="single"
            collapsible
            :ui="{
              root: 'border-t border-default',
              item: 'border-b border-default',
              trigger: 'flex w-full items-center justify-between gap-4 py-5 text-left font-serif text-xl font-normal text-highlighted transition-colors duration-300 hover:text-primary dark:hover:text-secondary-300 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 cursor-pointer',
              trailingIcon: 'size-4 text-muted transition-transform duration-300',
              body: 'max-w-2xl pb-5 pr-8 text-base font-normal leading-relaxed text-muted text-pretty',
            }"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
