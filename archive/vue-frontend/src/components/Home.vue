<script setup>
import SearchFilters from './SearchFilters.vue'
import HorizontalPropertyCard from './HorizontalPropertyCard.vue'

/* Disable on prod */
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore();
onMounted(() => {
  store.commit('setIsAuthenticated', true);
})
</script>

<template>
  <div class="w-full flex flex-col">
    
    <SearchFilters />

    <HorizontalPropertyCard />
    <HorizontalPropertyCard />
    <HorizontalPropertyCard />
    <HorizontalPropertyCard />

    
  </div>

</template>