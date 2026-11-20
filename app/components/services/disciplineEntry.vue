<script setup lang="ts">
import type { ServiceDetail } from "~/data/services";

interface Props {
  service: ServiceDetail;
  index: number;
}

const props = defineProps<Props>();

const entryRef = useTemplateRef<HTMLElement>("entryRef");
const imageFirst = computed(() => props.index % 2 === 0);

useSectionReveal(entryRef, {
  start: "top 88%",
  stagger: 0.06,
});
</script>

<template>
  <article
    :id="props.service.slug"
    ref="entryRef"
    class="py-6 lg:py-10 border-default border-b last:border-b-0 scroll-mt-28"
  >
    <div class="items-center gap-8 lg:gap-14 grid lg:grid-cols-12">
      <figure
        data-reveal
        class="lg:col-span-5 bg-muted overflow-hidden"
        :class="imageFirst ? '' : 'lg:order-2'"
      >
        <div class="aspect-4/3 lg:aspect-4/4 overflow-hidden">
          <NuxtImg
            :src="props.service.image"
            :alt="props.service.alt"
            width="960"
            height="1120"
            format="webp"
            loading="eager"
            class="w-full h-full object-center object-cover"
          />
        </div>
      </figure>

      <div
        class="lg:col-span-7"
        :class="imageFirst ? '' : 'lg:order-1'"
      >
        <p
          data-reveal
          class="font-serif tabular-nums text-secondary text-base"
        >
          {{ String(props.index + 1).padStart(2, "0") }}
        </p>

        <h2
          data-reveal
          class="mt-2 font-serif font-normal text-highlighted text-3xl sm:text-4xl text-balance leading-[1.05] tracking-tight"
        >
          {{ props.service.title }}
        </h2>

        <p
          data-reveal
          class="mt-4 max-w-xl font-normal text-toned text-base text-pretty leading-relaxed"
        >
          {{ props.service.summary }}
        </p>

        <ul
          data-reveal
          class="gap-x-6 gap-y-2.5 grid sm:grid-cols-2 mt-6"
        >
          <li
            v-for="item in props.service.includes"
            :key="item"
            class="flex gap-3 font-normal text-muted text-base leading-relaxed"
          >
            <span
              class="bg-secondary mt-2 size-2.5 rotate-45 shrink-0"
              aria-hidden="true"
            />

            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </article>
</template>
