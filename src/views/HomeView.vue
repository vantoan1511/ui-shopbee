<script setup lang="ts">
import { ref } from 'vue'
import ProductCard from '@/components/Product/Card.vue'
import { PrimeIcons } from '@primevue/core/api'

const selectedOrder = ref({ name: 'Nổi bật', code: 'FEATURED' })
const orders = ref([
  { name: 'Nổi bật', code: 'FEATURED' },
  { name: 'Mới nhất', code: 'LATEST' },
  { name: 'Giá thấp', code: 'LOWEST_PRICE' },
  { name: 'Giá cao', code: 'HIGHEST_PRICE' },
  { name: '% giảm giá', code: 'PERCENT_DISCOUNT' },
])
</script>

<template>
  <main>
    <div class="bg-surface-100">
      <div class="container">
        <div class="grid grid-cols-3 gap-5 pt-5 pb-3">
          <div class="col-span-1">Col 1</div>
          <div class="col-span-2">
            <div class="mb-2 flex items-center justify-between w-full">
              <p>Tìm thấy <strong>123</strong> kết quả</p>
              <div class="flex items-center">
                <span class="mr-2 text-muted-color">Sắp xếp theo:</span>
                <Select
                  v-model="selectedOrder"
                  :options="orders"
                  optionLabel="name"
                  placeholder="Chọn thứ tự hiển thị"
                  size="small"
                  class="w-56"
                />
              </div>
            </div>

            <div class="grid grid-cols-4 gap-2">
              <ProductCard v-for="i in Array(10)" :key="i"></ProductCard>
            </div>

            <div class="flex items-center justify-center w-full pt-10 pb-4">
              <Button
                :icon="PrimeIcons.ANGLE_DOWN"
                icon-pos="right"
                label="Xem thêm 123 kết quả"
                severity="secondary"
                variant="outlined"
                rounded
                class="bg-primary-contrast"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
