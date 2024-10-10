<script setup>

</script>

<template>
    <div class="bg-gray-200">
      <div class="container mx-auto p-6">
        <div class="text-center mb-8">
          <h1 class="text-4xl lg:text-6.25xl font-bold text-gray-800 font-sans">Get Started</h1>
          <div class="relative lg:py-8">
            <div class="absolute left-1/2 transform -translate-x-1/2 w-4 lg:w-8 h-2 bg-nav-blue"></div>
            <div class="border-t-2 border-nav-blue w-24 lg:w-44 mx-auto"></div>
          </div>
          <p class="text-gray-600 mt-4 font-sans text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit velit unde sed.
          </p>
        </div>
        <div class="flex flex-col lg:flex-row justify-center w-full h-auto">
          <div class="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-card">
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-8 w-full lg:w-1/2 text-white">
              <h2 class="text-3xl lg:text-5xl font-bold mb-4 font-sans">100% Satisfaction Guaranteed</h2>
              <p class="mb-6 font-sans text-base lg:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum, perspiciatis. Eaque nobis eos, soluta esse voluptate et nihil libero aut voluptates!
              </p>
              <h3 class="text-2xl lg:text-3xl font-bold mb-2 font-sans">What will be the next step?</h3>
              <ul class="list-disc list-inside space-y-2 font-sans text-sm lg:text-xl">
                <li class="flex items-center">
                  <font-awesome-icon icon="fa-solid fa-check" class="mr-2 text-sm lg:text-base" />We'll prepare the proposal
                </li>
                <li class="flex items-center">
                  <font-awesome-icon icon="fa-solid fa-check" class="mr-2 text-sm lg:text-base" />We'll discuss it together
                </li>
                <li class="flex items-center">
                  <font-awesome-icon icon="fa-solid fa-check" class="mr-2 text-sm lg:text-base" />Let's start the discussion
                </li>
              </ul>
            </div>
            <div class="p-8 w-full lg:w-1/2">
              <h3 class="text-xl lg:text-2xl font-bold text-blue-600 mb-4 font-sans">Start Your Project</h3>
              <form>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                  <input type="text" placeholder="First Name" class="border border-gray-300 p-2 rounded-lg shadow-md">
                  <input type="text" placeholder="Last Name" class="border border-gray-300 p-2 rounded-lg shadow-md">
                </div>
                <div class="mb-4">
                  <input type="email" placeholder="Email Address" class="border border-gray-300 p-2 w-full rounded-lg shadow-md">
                </div>
                <div class="mb-4">
                  <textarea placeholder="Message" class="border border-gray-300 p-2 w-full rounded-lg h-32 shadow-md"></textarea>
                </div>
                <button type="submit" class="bg-blue-600 text-white hover:bg-blue-950 px-4 py-3 mt-10 rounded-full w-full flex items-center justify-center font-sans">
                  Submit
                  <font-awesome-icon icon="fa-solid fa-paper-plane" class="text-lg text-white ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  