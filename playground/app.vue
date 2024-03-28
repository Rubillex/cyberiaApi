<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup lang="ts">

interface Category {
  id: number;
  name: string;
}

interface ResponseWithList<T> {
  result: {
    data: T[];
  }
}

const {data: testData} = await useAsyncData(
  () => $cyberiaApi<ResponseWithList<Category>>(`/categories`, {
    headers: {
      'X-Test': `test`,
    }
  },), {server: false}
);

console.log(testData.value?.result.data.find((i) => i.id === 1)?.name);
</script>
