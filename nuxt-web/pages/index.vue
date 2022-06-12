<script setup>
import { ref, computed, onBeforeMount } from 'vue'
import axios from "axios";

// This will also work in `<script setup> and <script>`
definePageMeta({
  layout: "search-enabled",
});

let properties = ref([]);

onBeforeMount(() => {
  axios.get('http://localhost:5001/properties')
  .then(function(res) {
    if(res.status === 200) {
      properties.value = res.data
    }
  })
})
</script>

<template>
  <div class="mb-14">
    <PropertyCard1 v-for="property in properties" 
      :id="property._key"
      :city="property.city"
      :province="property.province"
      :purchasePrice="parseFloat(property.purchasePrice)"
      :numOfBeds="parseInt(property.numOfBeds)"
      :numOfBaths="parseInt(property.numOfBaths)"
      :numOfParkingSpaces="parseInt(property.numOfParkingSpaces)"
      :erfSize="parseFloat(property.erfSize)"
      :description="property.description"
      :images="property.images"
    />

    <div class="h-full content-center" v-if="properties.length==0">
      <p class="text-4xl text-center font-bold">No Property Listings In The Database</p>
    </div>
  </div>
</template> 