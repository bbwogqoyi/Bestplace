<script setup>
import { ref } from 'vue'

// This will also work in `<script setup> and <script>`
definePageMeta({
//  layout: "search-enabled",
  layout: "default",
});

let properties = ref([]);

const { data } = await useFetch(`https://api.bestplace.co.za/properties`);
properties = data;

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
      :imagesDir="property.imagesDir"
      :images="property.images"
    />

    <div class="h-full content-center mt-10" v-if="properties.length == 0">
      <p class="text-4xl text-center font-bold">No Property Listings In The Database</p>
    </div>
  </div>
</template> 