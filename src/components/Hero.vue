<script setup>
import Button from './Functions/Button.vue';
import { ref } from 'vue';

const showModal = ref(false);

const toggleModal = () => {
    showModal.value = !showModal.value;
};
</script>

<template>
   <section>
    <div class="flex flex-col lg:flex-row justify-between items-center">
        <div class="lg:p-28 md:p-16 sm:p-10 p-6">
            <h1 class="lg:text-6.25xl md:text-5xl text-3xl font-bold font-sans text-white">
                Hi!, Welcome To Unicorn Agency
            </h1>
            <br>
            <p class="text-lg md:text-2xl sm:text-xl font-sans text-white text-justify">
                We're a multiple award winning digital agency with expertise in a diverse range of digital services and solutions
            </p>
            <br>
            <Button class="py-4 sm:hidden md:block">
                Get in Touch
                <span class="px-3 py-2 ml-6 -mr-3.5 bg-nav-blue rounded-full justify-center group-hover:bg-slate-600">
                    <font-awesome-icon icon="fa-solid fa-arrow-right" class="text-white" />                    
                </span>
            </Button>
        </div>

        <div class="relative lg:w-auto lg:mr-36 lg:mt-5 sm:mt-10 md:mt-10 w-full h-auto">
            <img src="../assets/home.png" alt="Agency Image" class="w-full h-auto" />
            <span>
                <a href="#" @click.prevent="toggleModal">
                    <font-awesome-icon icon="fa-solid fa-circle-play" class="text-nav-lightblue text-8xl absolute inset-0 m-auto h-20 w-20 rounded-full flex justify-center items-center animation-pulse" />
                </a>
            </span>
        </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
        <div class=" rounded-lg shadow-lg">
            <iframe
                width="720"
                height="550"
                src="https://www.youtube.com/embed/53tBZwCyx88?autoplay=1"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
            ></iframe>
            <button @click="toggleModal" class="mt-4 p-2 bg-black text-white rounded">Close</button>
        </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="bg-gradient-to-r from-nav-blue to-nav-lightblue -mt-15">
      <path fill="#ffffff" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,48C384,64,480,128,576,133.3C672,139,768,85,864,80C960,75,1056,117,1152,128C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
      </path>
    </svg>
</section>
</template>


<style>
.animation-pulse {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.8);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    }

    70% {
        transform: scale(1);
        box-shadow: 0 0 0 60px rgba(229, 62, 62, 0);
    }

    100% {
        transform: scale(0.8);
    }
}

</style>
