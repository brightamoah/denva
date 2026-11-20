<script setup lang="ts">
import { contactEmail, contactPhone, contactTopics } from "~/data/contact";
import { contactUsSchema } from "~/utils/contactSchema";

const route = useRoute();
const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const successRef = useTemplateRef<HTMLElement>("successRef");

const queryTopic = typeof route.query.topic === "string"
  ? route.query.topic
  : "";
const initialTopic = contactTopics.includes(queryTopic)
  ? queryTopic
  : contactTopics[0] ?? "Ghostwriting";

const formState = reactive({
  name: "",
  email: "",
  topic: initialTopic,
  message: "",
});

const submitted = ref(false);
const submitting = ref(false);
let submitTimer: ReturnType<typeof setTimeout> | undefined;

onBeforeUnmount(() => {
  if (submitTimer) clearTimeout(submitTimer);
});

useSectionReveal(sectionRef, {
  start: "top 85%",
  stagger: 0.07,
});

watch(
  () => route.query.topic,
  (topic) => {
    if (typeof topic === "string" && contactTopics.includes(topic)) {
      formState.topic = topic;
    }
  },
);

function handleSubmit() {
  submitting.value = true;

  submitTimer = setTimeout(() => {
    submitting.value = false;
    submitted.value = true;
    nextTick(() => successRef.value?.focus());
  }, 650);
}

function resetForm() {
  formState.name = "";
  formState.email = "";
  formState.topic = contactTopics[0] ?? "Ghostwriting";
  formState.message = "";
  submitted.value = false;
}

function onCreate(item: string) {
  contactTopics.push(item);

  formState.topic = item;
}
</script>

<template>
  <section
    id="contact-form"
    ref="sectionRef"
    class="bg-muted/60 border-default border-b scroll-mt-24"
  >
    <UContainer class="py-15 max-w-7xl">
      <div class="gap-12 lg:gap-20 grid lg:grid-cols-12">
        <div class="lg:col-span-7">
          <AppSectionHeading
            eyebrow="Your Enquiry"
            description="Tell us where the book is now and what you need. We will reply with the next step and a clear quote where the project is a fit."
            data-reveal
            :show-eyebrow="false"
          >
            Tell us about <span class="text-accent">the book.</span>
          </AppSectionHeading>

          <div
            v-auto-animate
            class="mt-10"
          >
            <UForm
              v-if="!submitted"
              class="space-y-5"
              :state="formState"
              :schema="contactUsSchema"
              @submit="handleSubmit"
            >
              <div class="gap-5 grid sm:grid-cols-2">
                <UFormField
                  label="Your name"
                  name="name"
                  required
                >
                  <UInput
                    v-model="formState.name"
                    autocomplete="name"
                    size="lg"
                    variant="outline"
                    class="w-full"
                    :ui="{ base: 'rounded-none' }"
                  />
                </UFormField>

                <UFormField
                  label="Email"
                  name="email"
                  required
                >
                  <UInput
                    v-model="formState.email"
                    type="email"
                    autocomplete="email"
                    spellcheck="false"
                    size="lg"
                    class="w-full"
                    :ui="{ base: 'rounded-none' }"
                  />
                </UFormField>
              </div>

              <UFormField
                label="What do you need?"
                name="topic"
                required
              >
                <USelectMenu
                  v-model.trim="formState.topic"
                  :items="contactTopics"
                  create-item
                  value-key="value"
                  size="lg"
                  class="w-full"
                  :ui="{
                    content: 'rounded-none',
                    base: 'rounded-none',
                  }"
                  @create="onCreate"
                />
              </UFormField>

              <UFormField
                label="About the book"
                name="message"
                required
              >
                <UTextarea
                  v-model="formState.message"
                  :rows="6"
                  autocomplete="off"
                  size="lg"
                  class="w-full"
                  :ui="{ base: 'rounded-none' }"
                />
              </UFormField>

              <div class="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4 pt-2">
                <UButton
                  type="submit"
                  label="Send enquiry"
                  color="secondary"
                  variant="solid"
                  trailing-icon="i-lucide-arrow-right"
                  :loading="submitting"
                  class="justify-center hover:bg-secondary-400 active:bg-secondary-400 px-8 rounded-none min-h-12 font-medium text-[11px] text-primary-950 uppercase tracking-[0.24em] cursor-pointer"
                />
              </div>
            </UForm>

            <div
              v-else
              ref="successRef"
              tabindex="-1"
              role="status"
              aria-live="polite"
              class="bg-default p-7 sm:p-9 border border-default"
            >
              <span
                aria-hidden="true"
                class="flex flex-col items-start gap-1.5 w-fit"
              >
                <span class="bg-secondary size-1.5 rotate-45" />

                <span class="flex gap-2.5">
                  <span class="bg-secondary size-1.5 rotate-45" />

                  <span class="bg-secondary size-1.5 rotate-45" />
                </span>
              </span>

              <h2 class="mt-6 font-serif font-normal text-highlighted text-3xl tracking-tight">
                Thank you{{ formState.name ? `, ${formState.name}` : "" }}.
              </h2>

              <p class="mt-4 max-w-lg font-normal text-muted text-sm text-pretty leading-relaxed">
                We have your note. We will get back to you with the next step and, where the
                project is a fit, a clear quote for the work.
              </p>

              <p class="mt-4 max-w-lg font-normal text-muted text-sm text-pretty leading-relaxed">
                If you would rather talk, call or WhatsApp us on
                <a
                  href="tel:+233552223232"
                  class="text-accent underline underline-offset-4"
                >
                  {{ contactPhone }}
                </a>.
              </p>

              <UButton
                label="Send another enquiry"
                color="neutral"
                variant="outline"
                trailing-icon="i-lucide-arrow-right"
                class="mt-7 px-6 rounded-none min-h-11 font-normal text-[10px] uppercase tracking-[0.24em] cursor-pointer"
                @click="resetForm"
              />
            </div>
          </div>
        </div>

        <aside
          data-reveal
          class="lg:top-28 lg:sticky lg:self-start lg:col-span-5"
        >
          <div class="bg-default p-6 sm:p-7 border border-default">
            <p class="font-normal text-[9px] text-muted uppercase tracking-[0.28em]">
              Prefer to talk?
            </p>

            <div class="space-y-3 mt-4">
              <a
                :href="`tel:${contactPhone.replace(/\s/g, '')}`"
                class="block font-serif font-normal text-highlighted hover:text-primary dark:hover:text-secondary-300 text-xl decoration-secondary/60 underline underline-offset-4 transition-colors duration-300"
              >
                {{ contactPhone }}
              </a>

              <a
                href="https://wa.me/233552223232"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 font-sans font-normal text-muted hover:text-highlighted text-sm transition-colors duration-300"
              >
                Call or WhatsApp us
                <UIcon
                  name="i-lucide-arrow-up-right"
                  class="size-3.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div class="mt-7 pt-5 border-default border-t">
              <p class="font-normal text-[9px] text-muted uppercase tracking-[0.26em]">
                Email
              </p>

              <a
                :href="`mailto:${contactEmail}`"
                class="inline-block mt-2 font-serif font-normal text-highlighted hover:text-primary dark:hover:text-secondary-300 text-lg decoration-secondary/60 underline underline-offset-4 wrap-break-word transition-colors duration-300"
              >
                {{ contactEmail }}
              </a>
            </div>

            <div class="mt-7 pt-5 border-default border-t">
              <p class="font-normal text-[9px] text-muted uppercase tracking-[0.26em]">
                Based in
              </p>

              <p class="mt-2 font-normal text-highlighted text-sm">
                Accra, Ghana
              </p>
            </div>

            <p class="mt-6 font-normal text-muted text-xs text-pretty leading-relaxed">
              An NDA is used before ghostwriting work begins, to protect your information and your
              project.
            </p>
          </div>
        </aside>
      </div>
    </UContainer>
  </section>
</template>
