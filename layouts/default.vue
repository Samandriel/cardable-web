<template>
  <div>
    <Head>
      <Title>Langasus - Conquer language barriers</Title>
      <Meta
        name="description"
        content="AI-powered language learning companion, designed to make mastering new languages intuitive, personalized, and engaging."
      />
    </Head>

    <NuxtLoadingIndicator />
    <slot />
  </div>
</template>

<style lang="scss">
@use "~/assets/scss/main.scss";
</style>
