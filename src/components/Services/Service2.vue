<script setup>
import Button from '../Functions/Button.vue';
</script>

<template>
<div class="flex items-center justify-center">
  <div class="container px-4 flex flex-col md:flex-col lg:flex-row items-center">
    <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
      <img alt="Web Development Service" class="rounded-lg w-full h-auto px-0 md:px-20 lg:px-36" src="/src/assets/service-2.png" />
    </div>
    <div class="w-full lg:w-1/2 lg:pl-8">
      <font-awesome-icon icon="fa-solid fa-code" class="text-3xl text-blue-500" />
      <div class="flex items-center mb-4">
        <h2 class="text-3xl font-bold bg-gradient-to-r from-nav-blue to-nav-lightblue inline-block text-transparent bg-clip-text ml-2">
          Web Development
        </h2>
      </div>
      <p class="text-gray-700 mb-6 pr-0 md:pr-20 lg:pr-28">
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
