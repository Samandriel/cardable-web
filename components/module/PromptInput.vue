<script setup lang="ts">
const promptText = ref("");
</script>

<template>
  <ShadCard class="prompt-input-wrapper">
    <textarea
      v-model="promptText"
      class="prompt-text-input"
      placeholder="Input your own text here..."
    />
    <div class="prompt-input-action-wrapper">
      <ShadButton variant="outline" class="prompt-input-reset-button">
        <Icon name="lucide:x" /> Clear
      </ShadButton>
      <ShadButton class="prompt-input-submit-button">
        <Icon name="lucide:send" /> Submit
      </ShadButton>
    </div>
  </ShadCard>
</template>

<style lang="scss" scoped>
.prompt-input-wrapper {
  margin: auto;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 1.5rem;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  background-color: hsl(var(--card));
  .prompt-text-input {
    background-color: hsl(var(--card));
    width: 100%;
    outline: none;
    min-height: 200px;
    resize: none;
  }
  .prompt-input-action-wrapper {
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: end;
  }
}
</style>
