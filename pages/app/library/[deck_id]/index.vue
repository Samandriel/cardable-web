<script setup lang="ts"></script>

<template>
  <div class="flashcard-view-wrapper">
    <div class="flashcard-item">
      <div class="flashcard-item__front">
        <div class="front-content">
          <div class="front-content__image">{{ "/Image/" }}</div>
          <div class="front-content__word">{{ "Word" }}</div>
          <div class="front-content__pronunciation">
            <div class="front-content__pronunciation-audio">
              {{ "/Audio/" }}
            </div>
            <span class="front-content__pronunciation-text">{{ "/IPA/" }}</span>
          </div>
        </div>
      </div>
      <div class="flashcard-item__back">
        <div class="back-content">
          <div class="back-content__image">{{ "/Image/" }}</div>
          <div class="back-content__definition">{{ "Definition" }}</div>
          <ul class="back-content__example-list">
            <li class="example-list-item">
              <span class="example-list-item__text">{{ "Example" }}</span>
              <span class="example-list-item__translation">{{
                "Translation"
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
