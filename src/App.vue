<script setup lang="ts">
import HomeView from "@/views/HomeView/HomeView.vue";

const elementConfig = {
  zIndex: 3000,
  size: "small",
};
</script>

<template>
  <el-config-provider
    :size="elementConfig.size"
    :z-index="elementConfig.zIndex"
  >
    <HomeView />
  </el-config-provider>
</template>

<style lang="scss" scoped></style>
