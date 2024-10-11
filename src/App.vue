<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
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
<div>
    <NavBar />

    <section id="home" class="bg-gradient-to-r from-nav-blue to-nav-lightblue relative">
      <Hero />
    </section>

    <section id="services">
      <Services />
     </section>

    <section id="testimonials" class="h-full bg-gradient-to-r from-nav-blue to-nav-lightblue relative">
      <Testimonials />
    </section>

    <section id="faqs">
       <Faqs />
    </section>

    <section id="portfolio">
     <LatestWork />
    </section>

    <section id="contact" class="bg-white">
      <GetStarted />
    </section>
  </div>

<Footer />

<BackToTop />
</template>
