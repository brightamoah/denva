<script setup lang="ts">
useSeoMeta({
  title: "Publishing Services · Denva Books",
  description:
    "Ghostwriting, manuscript review, editing and proofreading, cover design, interior layout, ISBN assistance, book printing and launch support from Denva Books in Accra, Ghana.",
  ogTitle: "Publishing Services · Denva Books",
  ogDescription:
    "One team for writing, editing, design, ISBN, printing and launch support, from first idea to finished book.",
  ogType: "website",
});
</script>

<template>
  <div>
    <AppPageHeader
      title="Everything your book needs,"
      accent="in one place."
      description="Writing, editing, design, ISBN and printing, handled by one team in Accra from the first idea to the finished book."
    />

    <ServicesDisciplineList />

    <ServicesProcessSection />

    <ServicesFaqSection />

    <AppClosingCta
      eyebrow="Start Your Book"
      title="Not sure what you need?"
      accent="Tell us where the book is."
      description="Send a short note, whether you have an idea, a manuscript or a finished file, and we will explain the next step and give you a clear quote."
      label="Get a quote"
      to="/contact"
      note="Accra, Ghana · denvabooksgh@gmail.com"
    />
  </div>
</template>
