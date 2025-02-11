<script setup lang="ts">
import type { FlashcardDeckProps } from "~/types/components";
defineProps<FlashcardDeckProps>();
</script>

<template>
  <div class="flashcard-deck">
    <NuxtLink :to="`/app`">
      <NuxtImg
        src="https://picsum.photos/300/200"
        alt="flashcard deck image"
        class="flashcard-deck-image"
        placeholder
      />
    </NuxtLink>
    <div class="flashcard-deck-content">
      <NuxtLink class="deck-header" :to="`/app`">
        <span class="deck-title">
          {{ data.name }}Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </span>

        <Icon name="circle-flags:en" size="1.25rem" class="deck-language" />
      </NuxtLink>
      <!-- <div class="deck-description">
      {{ data.description }}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et rutrum
      est, at bibendum enim. Nullam eros justo, congue a vulputate ultricies,
      iaculis a urna.
    </div> -->
      <div class="deck-footer">
        <NuxtLink class="deck-creator" :to="`/`">
          <div class="deck-creator__avatar">
            <Icon v-if="data.userId === 1" name="lucide:star" />
            <Icon v-else name="lucide:user" />
          </div>
          <span class="deck-creator__name">{{
            data.userId === 1 ? "Official" : "User"
          }}</span>
        </NuxtLink>
        <div class="deck-flashcard-count">
          <span class="deck-flashcard-count__number">{{
            data.flashcards.length
          }}</span>
          <span class="deck-flashcard-count__unit">
            {{ data.flashcards.length > 1 ? "items" : "item" }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flashcard-deck {
  display: flex;
  flex-direction: column;
  border: 1px solid hsl(var(--border));
  border-radius: var(--radius);
  overflow: hidden;
  background-color: hsl(var(--card));
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: hsl(var(--card-muted));
  }
  .flashcard-deck-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .flashcard-deck-content {
    padding: 1rem;
    .deck-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
      .deck-title {
        flex-grow: 1;
        flex-shrink: 1;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: bold;
      }
      .deck-language {
        flex-shrink: 0;
      }
    }
    .deck-description {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      flex-grow: 1;
      margin: 0.25rem 0 1rem;
      height: 3rem;
      font-style: italic;
      color: hsl(var(--color-text-muted));
    }
    .deck-flashcard-count {
      &__number {
      }
      &__unit {
        margin-left: 0.125rem;
      }
    }
    .deck-footer {
      display: flex;
      justify-content: space-between;
      .deck-creator {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        &__avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 1rem;
          height: 1rem;
          border-radius: 1rem;
          /* border: 1px solid hsl(var(--border)); */
        }
        &__name {
          font-size: 0.875rem;
          font-weight: bold;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
