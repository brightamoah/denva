<script setup lang="ts">
import { contactFacts, contactPhoneAlt, socialLinks } from "~/data/contact";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 95%",
  stagger: 0.07,
});
</script>

<template>
  <section
    ref="sectionRef"
    class="border-b border-default bg-default"
  >
    <UContainer class="max-w-7xl py-15 sm:py-20">
      <div class="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <div class="lg:col-span-7">
          <AppEyebrowLabel
            label="Contact Denva Books"
            data-reveal
          />

          <h1
            data-reveal
            class="mt-6 max-w-2xl font-serif text-5xl font-normal leading-[0.98] tracking-[-0.015em] text-highlighted text-balance sm:text-6xl lg:text-7xl"
          >
            Let's talk about <span class="text-accent">your book.</span>
          </h1>

          <p
            data-reveal
            class="mt-7 max-w-xl text-base font-normal leading-relaxed text-toned text-pretty sm:text-lg"
          >
            Tell us where the book is now, whether that is an idea, a manuscript or a finished
            file, and what you need. A short note is enough to begin.
          </p>

          <p
            data-reveal
            class="mt-8 text-sm font-normal text-muted"
          >
            Prefer to talk? Call or WhatsApp
            <a
              :href="`tel:${contactPhoneAlt.replace(/\s/g, '')}`"
              class="text-primary underline underline-offset-4 transition-colors duration-300 dark:text-primary-100 hover:text-secondary-700 dark:hover:text-secondary-300"
            >
              {{ contactPhoneAlt }}
            </a>.
          </p>

          <ul
            data-reveal
            class="mt-8 flex flex-wrap gap-x-6 gap-y-2"
          >
            <li
              v-for="social in socialLinks"
              :key="social.label"
            >
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-[10px] font-normal uppercase tracking-[0.22em] text-muted transition-colors duration-300 hover:text-highlighted"
              >
                {{ social.label }}
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-3"
                  aria-hidden="true"
                />
              </a>
            </li>
          </ul>
        </div>

        <dl
          data-reveal
          class="border-t border-default lg:col-span-5"
        >
          <div
            v-for="fact in contactFacts"
            :key="fact.label"
            class="flex items-baseline justify-between gap-6 border-b border-default py-4"
          >
            <dt class="text-[9px] font-normal uppercase tracking-[0.26em] text-muted">
              {{ fact.label }}
            </dt>

            <dd class="min-w-0 text-right">
              <a
                v-if="fact.href"
                :href="fact.href"
                class="break-words font-serif text-base font-normal text-highlighted transition-colors duration-300 hover:text-primary dark:hover:text-secondary-300 sm:text-lg"
              >
                {{ fact.value }}
              </a>

              <span
                v-else
                class="font-serif text-base font-normal text-highlighted sm:text-lg"
              >
                {{ fact.value }}
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </UContainer>
  </section>
</template>
