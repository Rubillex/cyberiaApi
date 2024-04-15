<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">
const {data: testData} = await useAsyncData(
  () => $rFetch(`/dictionaries?by_name=drivers,transport_vehicles`, {},), {server: false}
);
console.log('testData', testData.value);
</script>
