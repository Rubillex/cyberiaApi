<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
const {data: testData} = await useAsyncData(
  () => $fetch(`/test`, {
    headers: {
      'X-Test': `test`,
    }
  },), {server: false}
);
</script>
