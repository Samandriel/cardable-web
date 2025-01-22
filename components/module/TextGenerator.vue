<script setup lang="ts">
import {
  TEXT_TYPES,
  GENERAL_CATEGORIES,
  ACADEMIC_CATEGORIES,
  PROFESSIONAL_CATEGORIES,
  DIALOG_TOPICS,
  GENERAL_EMAIL_TOPICS,
  PERSONAL_ESSAY_TOPICS,
  REVIEW_TOPICS,
  STORY_GENRES,
  CONTEXT_SUBJECTS,
} from "@/assets/data/constants/prompt-generator-options.ts";

const selectedTextType = ref(null);
const selectedCategory = ref(null);
const selectedTopic = ref(null);
const topicLabel = ref("Topic");

watch(selectedTextType, () => {
  selectedCategory.value = null;
  selectedTopic.value = null;
});

watch(selectedCategory, (val) => {
  selectedTopic.value = null;

  if (ACADEMIC_CATEGORIES.includes(val)) {
    topicLabel.value = "Subject";
  } else {
    switch (val) {
      case GENERAL_CATEGORIES[6]:
      case GENERAL_CATEGORIES[7]:
        topicLabel.value = "Genre";
        break;
      case GENERAL_CATEGORIES[1]:
        topicLabel.value = "Subject";
        break;
      default:
        topicLabel.value = "Topic";
    }
  }
});
</script>

<template>
  <ShadCard class="prompt-generator-wrapper">
    <ShadCardHeader>
      <ShadCardTitle class="text-xl">Text Generator</ShadCardTitle>
    </ShadCardHeader>
    <ShadCardContent>
      <div class="generator-form-wrapper">
        <!-- TYPE -->
        <div class="generator-form-field-wrapper">
          <label for="textType" class="generator-form-label">Type</label>
          <ShadSelect id="textType" v-model="selectedTextType">
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select type" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(type, index) in TEXT_TYPES"
                :key="index"
                :value="type"
              >
                {{ type }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
        </div>

        <!-- Category -->
        <div v-if="selectedTextType" class="generator-form-field-wrapper">
          <label for="category" class="generator-form-label">Category</label>
          <ShadSelect
            v-if="selectedTextType === 'General'"
            id="category"
            v-model="selectedCategory"
            @change="onCategoryChanged"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Category" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(category, index) in GENERAL_CATEGORIES"
                :key="index"
                :value="category"
              >
                {{ category }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
          <ShadSelect
            v-if="selectedTextType === 'Academic'"
            id="category"
            v-model="selectedCategory"
            @change="onCategoryChanged"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Category" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(category, index) in ACADEMIC_CATEGORIES"
                :key="index"
                :value="category"
              >
                {{ category }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
          <ShadSelect
            v-if="selectedTextType === 'Professional'"
            id="category"
            v-model="selectedCategory"
            @change="onCategoryChanged"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Category" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(category, index) in PROFESSIONAL_CATEGORIES"
                :key="index"
                :value="category"
              >
                {{ category }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
        </div>

        <!-- TOPIC/SUBJECT -->
        <div
          v-if="
            selectedCategory &&
            selectedCategory !== 'Poetry' &&
            selectedTextType !== 'Professional'
          "
          class="generator-form-field-wrapper"
        >
          <label for="topic" class="generator-form-label">{{
            topicLabel
          }}</label>
          <ShadSelect
            v-if="selectedCategory === 'Dialog'"
            id="topic"
            v-model="selectedTopic"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Topic" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(topic, index) in DIALOG_TOPICS"
                :key="index"
                :value="topic"
              >
                {{ topic }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
          <ShadSelect
            v-if="selectedCategory === 'Email'"
            id="topic"
            v-model="selectedTopic"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Topic" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(topic, index) in GENERAL_EMAIL_TOPICS"
                :key="index"
                :value="topic"
              >
                {{ topic }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
          <ShadSelect
            v-if="selectedCategory === 'Personal Essay/Memoir'"
            id="topic"
            v-model="selectedTopic"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Topic" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(topic, index) in PERSONAL_ESSAY_TOPICS"
                :key="index"
                :value="topic"
              >
                {{ topic }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
          <ShadSelect
            v-if="selectedCategory === 'Review'"
            id="topic"
            v-model="selectedTopic"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Topic" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(topic, index) in REVIEW_TOPICS"
                :key="index"
                :value="topic"
              >
                {{ topic }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
          <ShadSelect
            v-if="
              selectedCategory === 'Screenplay/Scriptwriting' ||
              selectedCategory === 'Short Story'
            "
            id="topic"
            v-model="selectedTopic"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Genre" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(genre, index) in STORY_GENRES"
                :key="index"
                :value="genre"
              >
                {{ genre }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
          <ShadSelect
            v-if="
              selectedCategory === 'Article' ||
              ACADEMIC_CATEGORIES.includes(selectedCategory)
            "
            id="topic"
            v-model="selectedTopic"
          >
            <ShadSelectTrigger>
              <ShadSelectValue placeholder="Select Subject" />
            </ShadSelectTrigger>
            <ShadSelectContent>
              <ShadSelectItem
                v-for="(subject, index) in CONTEXT_SUBJECTS"
                :key="index"
                :value="subject"
              >
                {{ subject }}
              </ShadSelectItem>
            </ShadSelectContent>
          </ShadSelect>
        </div>
      </div>
    </ShadCardContent>
    <ShadCardFooter class="flex justify-end gap-2">
      <ShadButton variant="outline" class="prompt-input-reset-button">
        <Icon name="lucide:x" /> Reset
      </ShadButton>
      <ShadButton variant="secondary" class="prompt-input-submit-button">
        <Icon name="lucide:send" /> Submit
      </ShadButton>
    </ShadCardFooter>
  </ShadCard>
</template>

<style lang="scss" scoped>
.prompt-generator-wrapper {
  margin-top: 10vh;
  background: hsl(var(--background));
  max-width: 600px;
  margin: auto;
  .generator-form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    .generator-form-label {
      display: block;
      font-size: 0.875rem;
      margin-bottom: 0.25rem;
      font-weight: 600;
    }
  }
}
</style>
