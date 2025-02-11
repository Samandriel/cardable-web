<script setup lang="ts">
import { flashcardDecks } from "~/assets/data/flashcards";

definePageMeta({
  layout: "app",
  title: "Flashcards",
});

const recentFlashcardDecks = ref(flashcardDecks.slice(0, 3));
// const recommendedFlashcardDecks = ref(flashcardDecks);
const allFlashcardDecks = ref(
  [
    ...flashcardDecks,
    ...flashcardDecks,
    ...flashcardDecks,
    ...flashcardDecks,
  ].slice(0, 11)
);
</script>

<template>
  <div class="page-wrapper">
    <section v-if="recentFlashcardDecks.length > 0" class="page-section">
      <AppPageSectionHeader>
        <span>Recent</span>
        <!-- <template #right> View All </template> -->
      </AppPageSectionHeader>
      <div class="page-section-content">
        <div class="flashcard-deck-list">
          <FlashcardDeck
            v-for="deck in recentFlashcardDecks"
            :key="deck.id"
            :data="deck"
          />
          <NuxtLink class="flashcard-deck-more" to="/app/flashcard">
            <span>View More</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- <section class="page-section">
      <AppPageSectionHeader>
        <span>Recommended for you</span>
      </AppPageSectionHeader>
      <div class="page-section-content">
        
      </div>
    </section> -->

    <section class="page-section">
      <AppPageSectionHeader>
        <span>Flashcard Library</span>
        <!-- <template #right> View All </template> -->
      </AppPageSectionHeader>
      <div class="page-section-content">
        <div v-if="allFlashcardDecks.length > 0" class="flashcard-deck-list">
          <FlashcardDeck
            v-for="deck in allFlashcardDecks"
            :key="deck.id"
            :data="deck"
          />
          <NuxtLink class="flashcard-deck-more" to="/app/flashcard">
            <span>View More</span>
          </NuxtLink>
        </div>
        <div v-else>no flashcard</div>
      </div>
    </section>
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
  gap: 1rem;
  .flashcard-deck-more {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid hsl(var(--border));
    border-radius: var(--radius);
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
