<script setup lang="ts">
import categories from "~/assets/data/category";

const defaultSelectedCategory: FlashcardSubject = {
  id: 0,
  name: "All",
  topics: [],
};
const showFilter = ref(false);
const selectedCategory = ref<FlashcardSubject>(defaultSelectedCategory);
const selectedTopics = ref<FlashcardTopic[]>([]);

watch(selectedCategory, () => {
  if (selectedCategory.value.id === 0) {
    selectedTopics.value = [];
  }
});

const isInSelectedTopics = (id: number) => {
  return selectedTopics.value.some((item) => item.id === id);
};

const handleTopicSelection = (topic: FlashcardTopic) => {
  if (isInSelectedTopics(topic.id)) {
    selectedTopics.value = selectedTopics.value.filter(
      (item) => item.id !== topic.id
    );
  } else {
    selectedTopics.value.push({ id: topic.id, name: topic.name });
  }
};
</script>

<template>
  <div class="search-and-filter-wrapper" :class="{ 'show-filter': showFilter }">
    <div class="search-and-filter-body">
      <div class="header-row">
        <Search />
        <ShadButton
          class="filter-toggle-button"
          :class="{ 'is-active': showFilter }"
          variant="ghost"
          @click="showFilter = !showFilter"
        >
          <span>{{ showFilter ? "Submit" : "Show Filter" }}</span>
          <Icon
            class="filter-toggle-icon"
            :name="showFilter ? 'lucide:chevron-right' : 'lucide:filter'"
          />
        </ShadButton>
      </div>
      <div v-if="showFilter" class="filter-options-wrapper">
        <div class="filter-section">
          <h2 class="section-title">Subject/Domain</h2>
          <div class="filter-options subject-options">
            <!-- <ShadButton
              :variant="selectedCategory.id === 0 ? 'default' : 'outline'"
              @click="selectedCategory.id = 0"
              >All</ShadButton
            > -->
            <ShadButton
              v-for="category in [defaultSelectedCategory, ...categories]"
              :key="category.id"
              :variant="
                selectedCategory.id === category.id ? 'default' : 'outline'
              "
              @click="selectedCategory = category"
            >
              {{ category.name }}
            </ShadButton>
          </div>
        </div>

        <div v-if="selectedCategory.topics.length > 0" class="filter-section">
          <h2 class="section-title">Topics</h2>
          <div class="filter-options topic-options">
            <ShadButton
              :variant="selectedTopics.length === 0 ? 'default' : 'outline'"
              @click="selectedTopics = []"
            >
              <Icon
                :name="
                  selectedTopics.length === 0
                    ? 'lucide:circle-check'
                    : 'lucide:circle'
                "
              />
              All
            </ShadButton>
            <div v-for="topic in selectedCategory.topics" :key="topic.id">
              <ShadButton
                :variant="isInSelectedTopics(topic.id) ? 'default' : 'outline'"
                @click="handleTopicSelection(topic)"
              >
                <Icon
                  :name="
                    isInSelectedTopics(topic.id)
                      ? 'lucide:circle-check'
                      : 'lucide:circle'
                  "
                />
                {{ topic.name }}
              </ShadButton>
            </div>
          </div>
        </div>
      </div>
      <template v-else>
        <div v-if="selectedCategory.id !== 0" class="selected-filters">
          <div class="selected-filter-tag">
            {{ selectedCategory.name }}
          </div>
          <ShadSeparator class="h-8" orientation="vertical" />
          <div class="selected-topics-wrapper">
            <div>Topics:</div>
            <div v-if="selectedTopics.length === 0" class="selected-filter-tag">
              All Topics
            </div>
            <template v-else>
              <div
                v-for="topic in selectedTopics"
                :key="topic.id"
                class="selected-filter-tag"
              >
                {{ topic.name }}
              </div>
            </template>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-and-filter-wrapper {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  border-bottom: 1px solid hsl(var(--border));
  /* &.show-filter {
    height: 100%;
    bottom: 0;
  } */
  .search-and-filter-body {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-self: start;
    .header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }
  }
}
.filter-toggle-button {
  position: relative;
  width: 150px;
  justify-content: center;
  padding-right: 2rem;
  &:hover {
    background-color: hsl(var(--secondary) / 0.25) !important;
    text-decoration: underline;
  }
  &.is-active {
    font-weight: 500;
    background-color: hsl(var(--secondary));
  }
  .filter-toggle-icon {
    position: absolute;
    right: 1rem;
    top: 0;
    bottom: 0;
    flex: 1 0 auto;
    height: 100%;
  }
}
.filter-options-wrapper {
  margin-top: 1rem;
  .filter-section {
    .section-title {
      font-weight: bold;
    }
    .filter-options {
      margin: 0.5rem 0 2rem;
      &.subject-options,
      &.topic-options {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
    }
  }
}
.selected-filters {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  .selected-filter-tag {
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
  }
  .selected-topics-wrapper {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
}
</style>
