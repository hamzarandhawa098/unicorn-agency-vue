<script setup>
import Service1 from './Services/Service1.vue';
import Service2 from './Services/Service2.vue';
import Service3 from './Services/Service3.vue';
import Companies from './Companies.vue';
</script>
<template>
    <Companies />
<div>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-6.25xl font-extrabold text-black font-sans">Our Services</h1>
        <div class="relative mt-2">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-8 h-2 bg-nav-blue"></div>
            <div class="border-t-2 border-nav-blue w-44 mx-auto"></div>
        </div>
        <div class="mt-10 flex flex-col md:flex-row justify-center items-center md:space-x-8">
            <div class="md:w-1/2 text-center md:text-right">
                <p class="text-3xl font-bold text-gray-900 font-sans text-center">Our Services Range From Initial Design To Deployment Anywhere Anytime</p>
            </div>
            <div class="hidden md:block border-l border-gray-300 h-24 mx-8"></div>
            <div class="md:w-1/2 text-justify md:text-left mt-8 md:mt-0">
                <p class="text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur architecto magni, dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. Tempore ducimus molestiae in dolore enim.</p>
            </div>
        </div>
    </div>
</div>
<Service1 />
<Service2 />
<Service3 />
</template>
