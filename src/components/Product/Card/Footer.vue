<script setup lang="ts">
import { PrimeIcons } from '@primevue/core/api'
import ProductPromotion from '@/components/Product/Promotion.vue'
</script>

<template>
  <div class="mx-0 mt-3 pb-3 pt-3 border-t border-t-gray-200">
    <ProductPromotion />
    <p class="mt-3">
      <Button :icon="PrimeIcons.PLUS_CIRCLE" label="So sánh" severity="info" variant="text" fluid />
    </p>
  </div>
</template>

<style scoped></style>
