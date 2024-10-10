<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Companies from './components/Companies.vue';
import Services from './components/Services.vue';
import Testimonials from './components/Testimonials.vue';
import Faqs from './components/Faqs.vue';
import LatestWork from './components/LatestWork.vue';
import GetStarted from './components/GetStarted.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/Functions/BackToTop.vue';
</script>

<template>
<Navbar />
<div class="bg-gradient-to-r from-nav-blue to-nav-lightblue relative">
    <Hero />
</div>
<div class="h-full">
    <Companies />
    <Services />
</div>
<
<div class="h-full bg-gradient-to-r from-nav-blue to-nav-lightblue relative">
    <Testimonials />
</div>
<Faqs />
<LatestWork />
<div class="h-full">
    <GetStarted />
</div>

<Footer />

<BackToTop />
</template>
