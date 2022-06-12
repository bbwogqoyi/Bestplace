<script setup>

</script>

<template>

<div class="flex dark:bg-gray-900 border shadow-md p-4 bg-white">
  <div class="container mx-auto">
    <div class="max-w-md mx-auto bg-white md:px-5 rounded-md shadow-sm hidden">
      <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
        <p class="text-gray-400 dark:text-gray-400">Pleas sign in or register to contact third parties.</p>
      </div>

      <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Sign In</h1>
      </div>
     </div>

    <div class="max-w-md mx-auto bg-white md:px-5 rounded-md shadow-sm">
      <div class="text-center">
        <h1 class="my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200">Contact</h1>
        <p class="text-gray-400 dark:text-gray-400">Fill up the form below to send us a message.</p>
      </div>
      <div class="m-7">
        <!-- Leads -->
        <div class="mb-6">
          
          <input type="checkbox" name="name" id="name" placeholder="John Doe" class="mr-2" />
          <label for="name" class="mb-2 text-sm text-gray-600 dark:text-gray-400">Agent</label>
        </div>

        <div class="mb-6">
          
          <input type="checkbox" name="name" id="name" placeholder="John Doe" class="mr-2" />
          <label for="name" class="mb-2 text-sm text-gray-600 dark:text-gray-400">Better Bond</label>
        </div>

        <div class="mb-6">
          
          <input type="checkbox" name="name" id="name" placeholder="John Doe" class="mr-2" />
          <label for="name" class="mb-2 text-sm text-gray-600 dark:text-gray-400">Contractor</label>
        </div>

        

        <!-- Contact info -->
        <div class="mb-6">
          <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
          <input type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
          <input type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-6">
          <label for="phone" class="text-sm text-gray-600 dark:text-gray-400">Phone Number</label>
          <input type="text" name="phone" id="phone" placeholder="+27 (72) 123-4567" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
        </div>
        <div class="mb-6">
          <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>
          <textarea rows="5" name="message" id="message" placeholder="Your Message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
        </div>
        <div class="mb-6">
          <button type="submit" class="w-full px-3 py-3 rounded-md text-white bg-[#007bfc] bg-gradient-to-r hover:from-[#007bfc] hover:to-[#51b9ff] focus:outline-none">Send Message</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

