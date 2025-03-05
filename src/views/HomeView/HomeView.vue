<script setup lang="ts">
import PrismaButton from "@/components/PrismaButton/PrismaButton.vue";
import PrismaButtonElement from "@/components/PrismaButtonElement/PrismaButtonElement.vue";
</script>

<template>
  <span class="home-view">Home view</span>

  <section class="home-view__section">
    <PrismaButton>Finanças</PrismaButton>
  </section>

  <section class="home-view__section">
    <PrismaButtonElement>Primary</PrismaButtonElement>
  </section>
</template>

<style lang="scss" scoped>
.home-view {
  color: map.get($color-blue, 700);

  &__section {
    margin-top: map.get($spacing, lg);
    display: flex;
    gap: map.get($spacing, sm);
  }
}
</style>
