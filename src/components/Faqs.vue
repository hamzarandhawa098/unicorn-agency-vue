<script setup>
  import { ref } from 'vue'
  
  const faqs = ref([
    { question: 'What are the main features?', answer: 'The main features include...', isOpen: false },
    { question: 'Do I have to pay again after trial?', answer: 'Yes, you will need to pay again after the trial period ends...', isOpen: false },
    { question: 'How can I get started after trial?', answer: 'To get started after the trial, you need to...', isOpen: false },
    { question: 'Can I be refunded if I am not satisfied?', answer: 'If you are not satisfied, you can request a refund by...', isOpen: false }
  ])
  
  const toggleFaq = (index) => {
    faqs.value[index].isOpen = !faqs.value[index].isOpen
  }
  </script>


<template>
    <div class="bg-gray-100 flex items-center justify-center">
      <div class="w-full max-w-full mx-auto p-4">
        <h1 class="text-4xl lg:text-6.25xl font-bold text-center mb-4 lg:mb-0 font-sans">FAQ</h1>
        <div class="relative lg:py-8">
          <div class="absolute left-1/2 transform -translate-x-1/2 w-6 h-2 lg:w-8 bg-nav-blue"></div>
          <div class="border-t-2 border-nav-blue w-32 lg:w-44 mx-auto"></div>
        </div>
        <div class="flex justify-center mb-4 lg:mb-6 py-8 lg:py-12">
          <p class="text-center text-gray-600 mb-4 lg:mb-8 font-sans text-sm lg:text-lg">
            Frequently asked questions, get knowledge beforehand
          </p>
        </div>
        <div class="space-y-4 lg:space-y-8 w-full lg:w-10/12 lg:ml-64">
          <div class="bg-white rounded-lg shadow-md p-4 w-full lg:w-10/12" v-for="(faq, index) in faqs" :key="index">
            <div class="flex justify-between items-center cursor-pointer py-2" @click="toggleFaq(index)">
              <span class="text-base lg:text-xl">{{ faq.question }}</span>
              <font-awesome-icon :icon="faq.isOpen ? 'fa-solid fa-circle-minus' : 'fa-solid fa-circle-plus'" class="text-nav-blue text-base lg:text-lg" />
            </div>
            <transition name="slide-fade" mode="out-in">
              <div v-show="faq.isOpen" class="faq-content mt-2 text-gray-600 space-y-4 lg:space-y-8">
                <p>{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </template>

  
  <style scoped>
  .faq-header {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .faq-content {
    padding: 10px;
    border-top: 1px solid #ccc;
  }
    .slide-fade-enter-active, .slide-fade-leave-active {
    transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out;
  }
  
  .slide-fade-enter-from, .slide-fade-leave-to {
    max-height: 0;
    opacity: 0;
    overflow: hidden;
  }
  
  .slide-fade-enter-to, .slide-fade-leave-from {
    max-height: 500px;
    opacity: 1;
    overflow: hidden;
  }
  </style>
  