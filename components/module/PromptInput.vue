<script setup lang="ts">
const promptText = ref("");
</script>

<template>
  <div class="prompt-input-wrapper">
    <textarea
      v-model="promptText"
      class="prompt-text-input"
      placeholder="Input your own text..."
    />
    <div class="prompt-input-action-wrapper">
      <ShadButton variant="outline" class="prompt-input-reset-button">
        <Icon name="lucide:x" /> Clear
      </ShadButton>
      <ShadButton variant="secondary" class="prompt-input-submit-button">
        <Icon name="lucide:send" /> Submit
      </ShadButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.prompt-input-wrapper {
  margin: auto;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  background: hsl(var(--input-background));
  padding: 1rem;
  border-radius: var(--radius);
  display: flex;
  flex-direction: column;
  .prompt-text-input {
    width: 100%;
    outline: none;
    background: hsl(var(--input-background));
    min-height: 200px;
    resize: none;
  }
  .prompt-input-action-wrapper {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    justify-content: end;
  }
}
</style>
