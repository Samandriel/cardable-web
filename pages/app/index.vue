<script setup lang="ts">
definePageMeta({
  layout: "app",
  middleware: ["auth"],
});

const tabOptions = ["Input Your Own", "Generate Text"];
const activeTab = ref(1);
</script>

<template>
  <ShadTabs v-model="activeTab" class="prompt-interface-wrapper">
    <div class="prompt-interface-tabs">
      <ShadTabsList class="grid w-[400px] grid-cols-2">
        <ShadTabsTrigger
          v-for="(tab, index) in tabOptions"
          :key="index"
          :value="index"
        >
          {{ tab }}
        </ShadTabsTrigger>
      </ShadTabsList>
    </div>
    <ShadTabsContent :value="0" class="prompt-interface-tab-content">
      <ModulePromptInput />
    </ShadTabsContent>
    <ShadTabsContent :value="1" class="prompt-interface-tab-content">
      <ModuleTextGenerator />
    </ShadTabsContent>
  </ShadTabs>
</template>

<style lang="scss" scoped>
.prompt-interface-wrapper {
  height: inherit;
  padding: 1rem;
  overflow: auto;
  .prompt-interface-tabs {
    display: flex;
    justify-content: center;
    margin: 1rem auto auto;
  }
  .prompt-interface-tab-content {
    flex-grow: 1;
    padding: 1rem;
    min-height: 70vh;
    margin-top: 5vh;
  }
}
</style>
