<script setup lang="ts">
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const selectedLanguage = ref(0);
const isMenuOpen = ref(false);
const languageOptions: LanguageOptions[] = [
  { name: "English", code: "en" },
  { name: "Thai", code: "th" },
];

onBeforeMount(() => detectSelectedLanguage());

watch(locale, () => detectSelectedLanguage());

const detectSelectedLanguage = () => {
  selectedLanguage.value = languageOptions.findIndex(
    (option) => option.code === locale.value
  );
};
</script>

<template>
  <ClientOnly>
    <ShadNavigationMenuItem v-model="isMenuOpen">
      <ShadNavigationMenuTrigger>{{
        languageOptions[selectedLanguage].name
      }}</ShadNavigationMenuTrigger>
      <ShadNavigationMenuContent>
        <ul class="grid w-[150px] gap-3 p-4">
          <li
            v-for="(option, index) in languageOptions"
            :key="option.code"
            class="flex items-center justify-between rounded-md p-2 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            :class="{
              'bg-accent text-accent-foreground': index === selectedLanguage,
            }"
          >
            <ShadNavigationMenuLink as-child>
              <NuxtLink :to="switchLocalePath(option.code)">
                {{ option.name }}
              </NuxtLink>
            </ShadNavigationMenuLink>
          </li>
        </ul>
      </ShadNavigationMenuContent>
    </ShadNavigationMenuItem>
  </ClientOnly>
</template>
