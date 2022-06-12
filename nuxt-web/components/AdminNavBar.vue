<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  tabName: String
});

</script>

<template>
  <div class="bg-white">
    <nav class="flex flex-col sm:flex-row">
      <button :class="[ (tabName === 'index') ? 'active' : 'default']"
        @click="$router.push('/admin')">
        Properties
      </button>
      <button :class="[ (tabName === 'enquiries') ? 'active' : 'default']"
        @click="$router.push('/admin/enquiries')">
        Enquiries
      </button>
      <button :class="[ (tabName === 'users') ? 'active' : 'default']"
        @click="$router.push('/admin/users')">
        Users & Accounts
      </button>
    </nav>
  </div>
</template>

<style scoped lan="postcss">
  .default {
    @apply text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none
  }

   .active {
    @apply py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 border-b-2 font-medium border-blue-500
  }
</style>