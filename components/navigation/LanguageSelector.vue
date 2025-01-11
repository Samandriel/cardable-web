<script setup lang="ts">
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const selectedLanguage = ref(0);
const openMenu = ref(false);
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

const onSelect = (localCode: LanguageOptions["code"]) => {
  switchLocalePath(localCode);
  openMenu.value = false;
};
</script>

<template>
  <ClientOnly>
    <ShadNavigationMenuItem>
      <ShadPopover v-model:open="openMenu">
        <ShadPopoverTrigger>{{
          languageOptions[selectedLanguage].name
        }}</ShadPopoverTrigger>
        <ShadPopoverContent>
          <ShadCommand>
            <ShadCommandList>
              <ShadCommandGroup>
                <ShadCommandItem
                  v-for="option in languageOptions"
                  :key="option.code"
                  :value="option.code"
                  @select="onSelect(option.code)"
                >
                  <NuxtLink :to="switchLocalePath(option.code)">
                    {{ option.name }}
                  </NuxtLink>
                </ShadCommandItem>
              </ShadCommandGroup>
            </ShadCommandList>
          </ShadCommand>
        </ShadPopoverContent>
      </ShadPopover>
    </ShadNavigationMenuItem>
  </ClientOnly>
</template>
