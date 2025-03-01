<script setup lang="ts">
definePageMeta({
  layout: "app",
  title: "New Flashcard",
});
</script>

<template>
  <div class="page-wrapper">
    <!-- - Generate Flashcards With AI
    - Import Flashcards from Files
    - Create Custom Flashcards -->
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  .page-section {
    margin-bottom: 2.5rem;
    width: 100%;
  }
}
.flashcard-deck-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  flex-wrap: wrap;
  flex: 1 1 auto;
  gap: 1.25rem 1rem;
  .flashcard-deck-more {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid hsl(var(--border));
    border-radius: var(--radius);
    gap: 0.5rem;
    transition: all 0.2s ease-in-out;
    background-color: hsl(var(--card));
    &:hover {
      text-decoration: underline;
      background-color: hsl(var(--card-muted));
    }
  }
}
</style>
