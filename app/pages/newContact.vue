<script setup lang="ts">
import { contactTopics } from "~/data/contact";

const sectionRef = useTemplateRef<HTMLElement>("sectionRef");
const successRef = useTemplateRef<HTMLElement>("successRef");

const formState = ref({
  name: "",
  email: "",
  topic: "",
  message: "",
  confidential: false,
});

function onCreate(item: string) {
  contactTopics.push(item);

  formState.value.topic = item;
}

const submitted = ref(false);

function resetForm() {
  formState.value = {
    name: "",
    email: "",
    topic: "",
    message: "",
    confidential: false,
  };

  submitted.value = false;
}
</script>

<template>
  <section
    ref="sectionRef"
    class="bg-muted/60 border-default border-b"
  >
    <UContainer class="py-10 max-w-7xl">
      <div class="gap-12 lg:gap-20 grid lg:grid-cols-12">
        <div class="lg:col-span-7">
          <AppSectionHeading
            eyebrow="The Enquiry"
            :show-eyebrow="false"
            description="A few sentences are enough. If the book is not yet a book, tell us what it wants to become."
            data-reveal
          >
            Tell us about <span class="text-accent">the work.</span>
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
                label="What is this about?"
                name="topic"
                required
              >
                <USelectMenu
                  v-model.trim="formState.topic"
                  :items="contactTopics"
                  create-item
                  clear
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
                label="A note about the book"
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

              <UFormField name="confidential">
                <UCheckbox
                  v-model="formState.confidential"
                  label="I understand that initial enquiries are treated in confidence."
                  class="cursor-pointer"
                />
              </UFormField>

              <div class="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4 pt-2">
                <UButton
                  type="submit"
                  label="Send enquiry"
                  color="secondary"
                  variant="solid"
                  trailing-icon="i-lucide-arrow-right"
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
                Your note is with the house. A named editor will read it and reply within two
                working days. If the project is a fit, we will suggest a private call.
              </p>

              <p class="mt-4 max-w-lg font-normal text-muted text-sm text-pretty leading-relaxed">
                If you need a mutual NDA before speaking, mention it in your reply and we will send
                one first.
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
              A useful first note
            </p>

            <blockquote class="mt-5 font-serif font-normal text-highlighted text-2xl text-balance leading-snug">
              “The first conversation is not a pitch. It is a reading of the book that wants to
              exist.”
            </blockquote>

            <p class="mt-4 font-normal text-[9px] text-muted uppercase tracking-[0.26em]">
              The Denva house note
            </p>

            <div class="mt-8 pt-5 border-default border-t">
              <p class="font-normal text-[9px] text-muted uppercase tracking-[0.26em]">
                Prefer email?
              </p>

              <a
                href="mailto:inquiries@denvabooks.com"
                class="inline-block mt-2 font-serif font-normal text-highlighted hover:text-primary dark:hover:text-secondary-300 text-lg decoration-secondary/60 underline underline-offset-4 transition-colors duration-300"
              >
                inquiries@denvabooks.com
              </a>
            </div>

            <p class="mt-6 font-normal text-muted text-xs text-pretty leading-relaxed">
              All initial enquiries are confidential. A mutual NDA can be put in place before the
              first substantive conversation.
            </p>
          </div>
        </aside>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>

</style>
