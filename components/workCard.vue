<script setup lang="ts">
defineProps({
  companyName: String,
  startDate: String,
  endDate: String,
  summary: String,
  techUsed: Array as () => string[],
});
</script>

<template>
  <div class="work-card w-full h-[350px] bg-white border border-gray-300 rounded-lg shadow-md p-6 max-w-md mx-auto my-4">
    <h2 class="company-name text-2xl font-bold text-gray-800 mb-2">{{ companyName }}</h2>
    <p class="date-range text-sm text-gray-600 mb-4">{{ startDate }} - {{ endDate }}</p>
    <p class="summary text-base text-gray-700 mb-4">{{ summary }}</p>
    <div class="tech-used">
      <h3 class="text-lg font-semibold text-gray-800 mb-2">Technologies Used:</h3>
      <ul class="list-disc pl-5">
        <li v-for="tech in techUsed" :key="tech" class="text-sm text-gray-600">{{ tech }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
</style>