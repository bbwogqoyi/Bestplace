<script setup>
</script>

<template>
  <div class="w-full bg-gray-800">
    <div class="w-full lg:w-4/5 mx-auto px-2 sm:px-4 pt-6 pb-10">
      <div class="flex-shrink-0 flex items-center">
        <p class="text-3xl w-auto text-[#70CC64] font-extrabold">BestPlace</p>
      </div>

      <div class="flex justify-between text-white mt-6 underline">
        <div>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div class="cursor-pointer" @click="$router.push('/admin')">
          <p>Agent Zone</p>
        </div>
      </div>

      <div class=" text-gray-300 mt-8 text-sm font-light">
        Copyright &copy; 2021 BestPlace - All rights reserved.
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
