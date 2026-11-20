<script setup lang="ts">
useSeoMeta({
  title: "About Denva Books · Your Stress-Free Publishing Partner",
  description:
    "Denva Books is a publishing consultancy based in Accra, Ghana. We help authors and businesses turn ideas and manuscripts into professionally finished books. Our mission, vision, values and team.",
  ogTitle: "About Denva Books",
  ogDescription:
    "A publishing consultancy in Accra, Ghana, with one team accountable for writing, editing, design, ISBN, printing and launch support.",
  ogType: "website",
});
</script>

<template>
  <div>
    <AppPageHeader
      title="A publishing consultancy"
      accent="in Accra."
      description="One team accountable for the book, from the first idea or manuscript to a finished, printed and published copy."
    />

    <AboutStorySection />

    <AboutPrinciplesSection />

    <AboutTimelineSection />

    <AboutAtelierSection />

    <AppClosingCta
      eyebrow="Start Your Book"
      title="Tell your story."
      accent="Publish with us."
      description="Tell us what you have, whether that is an idea, a manuscript or a finished file, and what you want the book to do. We will explain the next step."
      label="Get a quote"
      to="/contact"
      note=""
    />
  </div>
</template>
