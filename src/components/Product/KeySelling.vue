<script setup lang="ts">
defineProps({
  imgSrc: String,
  imgAlt: String,
})
</script>

<template>
  <div class="flex w-[62px] flex-col items-center justify-center gap-1 px-1">
    <div class="flex h-5 w-5 items-center justify-center rounded-full">
      <img :alt="imgAlt" loading="lazy" :src="imgSrc" />
    </div>
    <div class="text-[9px] font-normal text-center text-muted-color">
      <p>{{ imgAlt }}</p>
    </div>
  </div>
</template>
