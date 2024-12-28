<script setup lang="ts">
import ProductCardTitle from '@/components/Product/Card/Title.vue'
import ProductCardFooter from '@/components/Product/Card/Footer.vue'
</script>

<template>
  <div class="p-2">
    <Tag class="mb-2" severity="secondary" value="Trả góp 0%" rounded></Tag>
    <div class="text-left flex flex-col justify-center min-h-[66px]">
      <p>
        <span class="text-muted-color line-through text-sm"> 17.990.000&nbsp;₫ </span>
        <span class="ml-1 text-red-500 font-semibold text-sm">-14%</span>
      </p>
      <p class="font-bold leading-[24px] text-black">15.490.000&nbsp;₫</p>
      <p class="text-[12px] leading-[18px] font-normal text-green-700">Giảm 2.500.000&nbsp;₫</p>
    </div>
    <ProductCardTitle />
    <ProductCardFooter />
  </div>
</template>

<style scoped></style>
