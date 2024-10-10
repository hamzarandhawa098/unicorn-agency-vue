<script setup>
import Button from '../Functions/Button.vue';
</script>

<template>
  <div class="flex items-center justify-around">
    <div class="flex flex-col md:flex-col lg:flex-row-reverse items-center px-4 md:px-28 space-y-8 lg:space-y-0 lg:space-x-28">
      <div class="w-full lg:w-1/2">
        <img alt="Marketing Service" class="w-full h-auto" src="/src/assets/service-1.png" />
      </div>
      
      <div class="max-w-md text-center lg:text-left">
        <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-3xl text-blue-500" />
        <div class="flex items-center justify-center lg:justify-start space-x-2 mb-4">
          <h1 class="text-3xl font-bold bg-gradient-to-r from-nav-blue to-nav-lightblue inline-block text-transparent bg-clip-text">
            Marketing
          </h1>
        </div>
        <p class="text-gray-600 mb-6">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti culpa sit pariatur cupiditate possimus nulla cum magnam ullam fuga nobis? Vel neque unde maxime cupiditate laborum ducimus dolorum.
        </p>
        <Button class="py-4 border-nav-blue border-2">
          Learn More
          <span class="px-3 py-2 ml-6 -mr-3.5 bg-nav-blue rounded-full justify-center group-hover:bg-slate-600">
            <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-white" />
          </span>
        </Button>
      </div>
    </div>
  </div>
</template>
