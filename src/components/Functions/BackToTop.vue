<template>
    <div
      v-if="isVisible"
      class="fixed bottom-4 right-4 z-50 cursor-pointer"
      @click="scrollToTop"
    >
      <div class="bg-blue-500 text-white rounded-full px-4 py-3 shadow-lg">
        <font-awesome-icon icon="fa-solid fa-angle-up" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isVisible = ref(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleScroll = () => {
    isVisible.value = window.scrollY > 300;
  };
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  </script>
  
