<script setup lang="ts">
import ProductKeySelling from '@/components/Product/KeySelling.vue'
import ProductCardInfo from '@/components/Product/Card/Info.vue'
</script>

<template>
  <div
    class="h-full flex flex-col justify-between bg-white rounded-[10px] hover:shadow-md transition duration-300 ease-in-out"
  >
    <div class="flex-1">
      <div class="relative flex items-center justify-between px-2">
        <RouterLink to="/" class="flex-1">
          <div class="flex items-center h-[210px]">
            <img
              alt="Product Feature Image"
              src="/src/assets/images/products/laptop_001.png"
              class="transition duration-300 hover:scale-105"
            />
          </div>
        </RouterLink>
        <div class="flex flex-col items-center justify-center gap-1.5">
          <ProductKeySelling img-alt="OLED 2.8K" img-src="/src/assets/images/products/oled.svg" />
          <ProductKeySelling
            img-alt="Độ bền chuẩn quân đội"
            img-src="/src/assets/images/products/ic_guarantee.svg"
          />
          <ProductKeySelling
            img-alt="Bảo mật vân tay"
            img-src="/src/assets/images/products/ic_finger_print.svg"
          />
        </div>
      </div>
      <ProductCardInfo />
    </div>
  </div>
</template>

<style scoped></style>
