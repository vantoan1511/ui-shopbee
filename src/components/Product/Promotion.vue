<script setup lang="ts">
import PromotionImage from '@/components/Product/Promotion/Image.vue'
</script>

<template>
  <div>
    <div class="flex items-center text-muted-color text-[12px] gap-1 leading-[18px] mb-1.5">
      <PromotionImage v-for="i in Array(4)" :key="i" />
    </div>
    <p class="PromotionDetail text-muted-color">Nhập mã FPTLAP giảm 5% tối đa 200.000đ</p>
  </div>
</template>

<style scoped>
.PromotionDetail {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  overflow: hidden;
  text-align: left;
}
</style>
