<script setup>
import { ref } from 'vue';
import Button from './Functions/Button.vue';

const links = [
    { name: "Home", link: "#" },
    { name: "Services", link: "#" },
    { name: "Testimonials", link: "#" },
    { name: "Faqs", link: "#" },
    { name: "Portfolio", link: "#" },
    { name: "Contact", link: "#" },
];

const open = ref(false);

const toggleMenu = () => {
    open.value = !open.value;
};
</script>

<template>
    <div class="bg-gradient-to-r from-nav-blue to-nav-lightblue py-2.75 px-0 md:flex justify-between items-center  shadow sticky top-0 z-50">
        <div class="flex items-center">
            <span class="text-xl mr-1 px-28">
                <a href="#">
                    <img src="../assets/logo.png" alt="Logo" class="w-fixed-logo sticky">
                </a>        
            </span>
        </div>
        <span @click="toggleMenu" class="text-white absolute lg:hidden right-24 top-1.5 cursor-pointer">
            <font-awesome-icon icon="fa-solid fa-bars" class="text-xl font-thin border hover:border-4 border-blue-100 w-7 px-3 py-2 rounded-lg" />
        </span>
        <div class="lg:px-32">
        <ul class="lg:flex lg:items-center lg:justify-end lg:px-0 px-0 lg:pb-0 pb-10 absolute lg:static  lg:z-auto z-[-1] w-full left-0 lg:w-auto lg:pl-0 pl-30 transition-all duration-500 ease-in"
            :class="[open ? 'top-14 opacity-100' : 'top-[-400px] opacity-0', 'lg:opacity-100 lg:top-auto', open ? 'bg-gradient-to-r from-nav-blue to-nav-lightblue' : 'bg-transparent']">
            <li class="lg:mx-4 lg:my-0 lg:p-1 my-6 lg:py-0 py-2 lg:pl-0 pl-2 font-sans font-semibold text-base lg:border-none  border-b border-white lg:w-auto w-4/5" v-for="link in links" :key="link.name">
                <a :href="link.link" class="text-white hover:text-gray-300 transition duration-300">{{ link.name }}</a>
            </li>

            <Button class="hidden md:flex lg:flex font-sans text-base font-bold">
                +1 (332) 9810-220 
                <span class="px-3 py-2 ml-6 -mr-3.5 bg-nav-blue rounded-full justify-center group-hover:bg-slate-600">
                    <font-awesome-icon icon="fa-solid fa-phone-flip" class="text-white" />                    
                </span>
            </Button>
        </ul>
    </div>
    </div>
</template>
