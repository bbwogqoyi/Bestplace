<script setup>
import { ref } from 'vue'

// This will also work in `<script setup> and <script>`
definePageMeta({
//  layout: "search-enabled",
  layout: "default",
});


</script>

<template>
  <div class="mb-14">
    <SearchFilters/>
    <LocationAndStats />
  </div>
</template> 