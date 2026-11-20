<script setup lang="ts">
import {
  //  ghostwritingPackageNote,
  ghostwritingPackages,
} from "~/data/services";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");

useSectionReveal(sectionRef, {
  start: "top 82%",
  stagger: 0.05,
});
</script>

<template>
  <section
    id="ghostwriting-packages"
    ref="sectionRef"
    class="bg-default border-default border-b scroll-mt-24"
  >
    <UContainer class="py-6 sm:py-10 max-w-7xl">
      <div class="flex lg:flex-row flex-col lg:justify-between lg:items-end gap-6">
        <AppSectionHeading
          eyebrow="Ghostwriting Packages"
          description="Transparent package pricing for full ghostwriting, editing, book design and ISBN registration under strict NDA."
          data-reveal
          :show-eyebrow="false"
        >
          Structured packages for <span class="text-accent">every manuscript size.</span>
        </AppSectionHeading>
      </div>

      <div class="gap-6 grid sm:grid-cols-2 lg:grid-cols-3 mt-10">
        <article
          v-for="pkg in ghostwritingPackages"
          :key="pkg.name"
          data-reveal
          class="flex flex-col justify-between bg-muted/40 p-6 border border-default hover:border-accented transition-colors"
        >
          <div>
            <div class="flex justify-between items-center gap-2 pb-4 border-default border-b">
              <h3 class="font-serif font-normal text-highlighted text-xl tracking-tight">
                {{ pkg.name }}
              </h3>

              <UBadge
                color="secondary"
                variant="subtle"
                size="sm"
                class="rounded-none text-[10px] uppercase tracking-wider"
              >
                {{ pkg.timeline }}
              </UBadge>
            </div>

            <p class="mt-4 font-serif font-normal text-primary dark:text-secondary-300 text-3xl">
              {{ pkg.price }}
            </p>

            <p class="mt-2 font-normal text-muted text-xs">
              Scope: {{ pkg.pages }}
            </p>

            <ul class="space-y-2 mt-5 pt-4 border-default border-t text-toned text-xs">
              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-3.5 text-secondary shrink-0"
                  aria-hidden="true"
                />

                <span>Interviews & audio transcription</span>
              </li>

              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-3.5 text-secondary shrink-0"
                  aria-hidden="true"
                />

                <span>Writing & multiple revision rounds</span>
              </li>

              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-3.5 text-secondary shrink-0"
                  aria-hidden="true"
                />

                <span>Editing & final proofreading</span>
              </li>

              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-3.5 text-secondary shrink-0"
                  aria-hidden="true"
                />

                <span>Book cover & interior layout design</span>
              </li>

              <li class="flex items-center gap-2">
                <UIcon
                  name="i-lucide-check"
                  class="size-3.5 text-secondary shrink-0"
                  aria-hidden="true"
                />

                <span>ISBN registration assistance</span>
              </li>
            </ul>
          </div>

          <!-- <div class="mt-6 pt-4 border-default border-t">
            <UButton
              label="Commission this package"
              to="/contact"
              color="secondary"
              variant="outline"
              block
              class="rounded-none min-h-10 text-[10px] uppercase tracking-[0.2em] cursor-pointer"
            />
          </div> -->
        </article>
      </div>

      <!-- <div class="bg-muted/40 mt-10 p-5 border border-default">
        <p class="font-normal text-muted text-xs sm:text-sm leading-relaxed">
          <strong class="font-medium text-highlighted">Package Note:</strong>
          {{ ghostwritingPackageNote }}
        </p>
      </div> -->
    </UContainer>
  </section>
</template>
