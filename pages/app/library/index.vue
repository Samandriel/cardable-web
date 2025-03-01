<script setup lang="ts">
// import { flashcardDecks } from "~/assets/data/flashcards";

definePageMeta({
  layout: "app",
  title: "Library",
});
</script>

<template>
  <div class="page-wrapper">
    <!-- SEARCH AND FILTER - display search bar and toggle to reveal full page filters -->
    <ModuleSearchAndFilter />
    <!-- Flashcard Deck List -->
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
