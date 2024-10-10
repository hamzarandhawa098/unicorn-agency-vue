<script setup>
import { ref, computed } from 'vue';

const slides = ref([
    {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque fuga alias error ab odio vel commodi tempore doloremque deserunt rerum? Aperiam, obcaecati distinctio ex perspiciatis cum maxime natus eligendi a!",
        name: "Andrew Tate",
        title: "CEO & Founder",
        image: "/src/assets/client-1.jpg",
        stars: 3 
    },
    {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
        name: "Jane Doe",
        title: "CTO",
        image: "/src/assets/client-2.jpg",
        stars: 4
    },
    {
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
        name: "John Smith",
        title: "CFO",
        image: "/src/assets/client-3.jpg",
        stars: 5
    },
]);

const currentIndex = ref(0);

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.value.length;
};

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length;
};

const starsArray = computed(() => {
    return Array.from({ length: slides.value[currentIndex.value].stars }, (_, index) => index + 1);
});
</script>

<template>
<section class="w-full">
    <div class="flex justify-center p-10 -mt-24">
        <div class="w-full sm:w-[80%] md:w-[60%] bg-blue-100 h-52 rounded-lg relative z-0 overflow-hidden">
            <transition name="slide-fade" mode="out-in">
                <div :key="currentIndex" class="flex justify-center mt-10 mx-4">
                    <font-awesome-icon icon="fa-solid fa-quote-left" class="text-2xl text-nav-blue px-2 mb-40" />
                    <p class="transition-opacity duration-300 text-sm sm:text-base md:text-lg">{{ slides[currentIndex].text }}</p>
                </div>
            </transition>
            <div class="absolute left-1/2 transform -translate-x-1/2 -mt-24 flex space-x-1">
                <template v-for="star in starsArray" :key="star">
                    <font-awesome-icon icon="fa-solid fa-star" class="text-nav-blue" />
                </template>
                <template v-for="star in Array.from({ length: 5 - starsArray.length })" :key="star">
                    <font-awesome-icon icon="fa-regular fa-star" class="text-gray-400" />
                </template>
            </div>
        </div>
    </div>
    <div class="flex justify-center -mt-24">
        <div class="h-24 w-24 border-4 border-nav-blue rounded-full bg-white relative z-10">
            <img :src="slides[currentIndex].image" alt="" class="rounded-full h-full w-full object-cover">
        </div>
    </div>
    <div class="py-4 font-bold font-sans text-white text-center">
        <h1 class="text-2xl sm:text-3xl">{{ slides[currentIndex].name }}</h1>
        <h2 class="py-2 text-sm sm:text-base">{{ slides[currentIndex].title }}</h2>
    </div>
    <div class="flex justify-center">
        <font-awesome-icon 
            icon="fa-solid fa-arrow-left-long"  
            class="text-lg text-white hover:bg-white hover:text-black border border-white rounded-lg px-3 py-1 m-0.5 cursor-pointer"
            @click="prevSlide"
        />
        <font-awesome-icon 
            icon="fa-solid fa-arrow-right-long" 
            class="text-lg text-white hover:bg-white border border-white hover:text-black rounded-lg px-3 py-1 m-0.5 cursor-pointer"
            @click="nextSlide"
        />
    </div>
</section>
</template>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
    transform: translateX(10px);
}

/* Add additional styles for the slider if needed */
</style>
