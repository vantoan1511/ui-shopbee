<script setup lang="ts">
import { ref } from 'vue'

const query = ref('')
const hotTags = ref([
  'laptop van phong',
  'asus moi nhat',
  'mac moi',
  'laptop gaming',
  'msi thin',
  'ultra book',
  'aspire 15',
])
</script>

<template>
  <header class="bg-gradient-to-r from-primary-700 to-primary-500 py-5">
    <div class="container">
      <div class="grid grid-cols-4">
        <div class="flex">
          <RouterLink to="/">
            <img src="/src/assets/logo.svg" width="42" alt="logo" />
          </RouterLink>
        </div>
        <div class="col-span-2 px-5">
          <IconField>
            <InputIcon class="pi pi-search" />
            <InputText v-model="query" placeholder="Search" class="rounded-full" fluid />
          </IconField>
          <div class="flex justify-between gap-3 text-white overflow-hidden">
            <RouterLink
              v-for="tag in hotTags"
              :key="tag"
              to="/"
              class="text-nowrap hover:underline underline-offset-4"
            >
              {{ tag }}
            </RouterLink>
          </div>
        </div>
        <div class="ml-auto space-x-5">
          <Button icon="pi pi-user" severity="secondary" rounded />
          <Button icon="pi pi-shopping-cart" label="Cart" severity="contrast" rounded />
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
