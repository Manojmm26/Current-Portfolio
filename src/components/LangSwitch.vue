<script setup lang="ts">
import Button from "./Button.vue";
import { locale } from "../i18n/store";
import { changeLocale } from "../i18n/utils/locale";

const handleLangSwitch = () => {
  if (locale.value === "en") {
    changeLocale("hi");
  } else if (locale.value === "hi") {
    changeLocale("hinglish");
  } else {
    changeLocale("en");
  }
};
</script>

<template>
  <Button
    variant="border"
    size="sm"
    @click="handleLangSwitch"
    data-cursor="circle-white"
    data-sound="click"
    data-hoversound="hover"
    >{{ locale === "en" ? "EN" : locale === "hi" ? "HI" : "HG" }}</Button
  >
</template>
