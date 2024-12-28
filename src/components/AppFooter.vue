<script setup lang="ts">
import { ref } from 'vue'

const socials = ref([
  {
    url: '/src/assets/images/socials/fb.svg',
  },
  {
    url: '/src/assets/images/socials/zalo.svg',
  },
  {
    url: '/src/assets/images/socials/yt.svg',
  },
  {
    url: '/src/assets/images/socials/tiktok.svg',
  },
])

const aboutUrls = ref([
  {
    name: 'Giới thiệu về công ty',
  },
  {
    name: 'Quy chế hoạt động',
  },
  {
    name: 'Shopbee.Friends - Bạn đồng hành',
  },
  {
    name: 'Tin tức khuyến mại',
  },
  {
    name: 'Giới thiệu máy đổi trả',
  },
  {
    name: 'Hướng dẫn mua hàng &amp; thanh toán online',
  },
  {
    name: 'Đại lý uỷ quyền và TTBH uỷ quyền của Apple',
  },
  {
    name: 'Tra cứu hoá đơn điện tử',
  },
  {
    name: 'Tra cứu bảo hành',
  },
  {
    name: 'Câu hỏi thường gặp',
  },
])

const policies = ref([
  {
    name: 'Chính sách bảo hành',
  },
  {
    name: 'Chính sách đổi trả',
  },
  {
    name: 'Chính sách bảo mật',
  },
  {
    name: 'Chính sách trả góp',
  },
  {
    name: 'Chính sách khui hộp sản phẩm',
  },
  {
    name: 'Chính sách giao hàng & lắp đặt',
  },
])
</script>

<template>
  <footer class="bg-surface-900 relative">
    <div class="container">
      <div class="flex items-center border-b border-neutral-500 py-10">
        <div class="flex-1 text-left">
          <p class="font-semibold leading-6 text-primary-contrast">
            Hệ thống Shopbee trên toàn quốc
          </p>
          <p class="text-sm text-neutral-400">
            Bao gồm Cửa hàng Shopbee, Trung tâm Shopbee, Shopbee Gaming
          </p>
        </div>
        <div class="text-center">
          <Button label="Xem danh sách cửa hàng" severity="danger" rounded />
        </div>
      </div>
    </div>

    <div class="container flex flex-wrap py-10 text-primary-contrast">
      <div class="grid grid-cols-3 gap-3 flex-1">
        <div>
          <p class="font-semibold pb-1.5">KẾT NỐI VỚI SHOPBEE</p>
          <ul class="flex pb-2.5">
            <li v-for="social in socials" :key="social.url" class="flex">
              <a href="/" target="_blank" class="mr-3">
                <img :src="social.url" alt="FB" width="28" height="28" loading="lazy" />
              </a>
            </li>
          </ul>
          <p class="font-semibold pb-1.5 mt-5">TỔNG ĐÀI MIỄN PHÍ</p>
        </div>
        <div>
          <p class="font-semibold pb-1.5">VỀ CHÚNG TÔI</p>
          <ul class="mt-1.5">
            <li
              v-for="url in aboutUrls"
              :key="url.name"
              class="mt-1 hover:underline underline-offset-4"
            >
              <RouterLink to="/">{{ url.name }}</RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <p class="font-semibold pb-1.5">CHÍNH SÁCH</p>
          <ul class="mt-1.5">
            <li
              v-for="url in policies"
              :key="url.name"
              class="mt-1 hover:underline underline-offset-4"
            >
              <RouterLink to="/">{{ url.name }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
