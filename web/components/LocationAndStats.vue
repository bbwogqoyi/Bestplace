<script lang="ts">
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [ 'August', 'September', 'October' ],
        datasets: [{ 
          label: "Average Property Price",
          data: [40, 20, 12],
          backgroundColor: ['#36a2eb', '#ff6384', '#cc65fe', '#ffce56']
        }]
      },
      chartOptions: {
        responsive: false,
      }
    }
  }
}
</script>

<script setup lang="ts">
import { ref } from 'vue'


const count = ref(0)
</script>

<template>
  <div class="w-full lg:w-4/5 mx-auto px-2 sm:px-4 pt-6 pb-10 ">
    <div class="flex flex-row space-x-2 justify-between ">
      <div class="w-9/12 space-y-4">
        <p class="font-bold text-xl text-[#1e38a3] my-4">Property for Sale in KwaZulu Natal</p>
        <div class="grid grid-cols-4">
          <a href="#">Durban</a>
          <a href="#">Ballito</a>
          <a href="#">Hillcrest</a>
          <a href="#">Newcastle</a>
          <a href="#">Pietermaritzburg</a>
          <a href="#">Westville</a>
          <a href="#">Pinetown</a>
          <a href="#">Umdloti</a>
          <a href="#">Umhlanga</a>
          <a href="#">Richards Bay</a>
          <a href="#">Queensburgh</a>
          <a href="#">Phoenix</a>
          <a href="#">Amanzimtoti</a>
          <a href="#">Margate</a>   
        </div>
        <div class="grid grid-cols-4 space-y-reverse space-y-3">
          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">Gauteng</a>
            <a href="#">Pretoria</a>
            <a href="#">Johannesburg</a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">Western Cape</a>
            <a href="#">Cape Town</a>
            <a href="#">Somerset West</a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">Free State</a>
            <a href="#">Bloemfontein</a>
            <a href="#">Welkom</a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">Mpumalanga</a>
            <a href="#">Nelspruit</a>
            <a href="#">Witbank</a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">Eastern Cape</a>
            <a href="#">Port Elizabeth</a>
            <a href="#">East London</a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">North West</a>
            <a href="#">Rustenburg</a>
            <a href="#">Potchefstroom</a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">Limpopo</a>
            <a href="#">Polokwane</a>
            <a href="#">Tzaneen</a>
          </div>

          <div class="flex flex-col">
            <a href="#" class="font-semibold text-base text-[#1e38a3] mb-1">Northern Cape</a>
            <a href="#">Port Nolloth</a>
            <a href="#">Kimberley</a>
          </div>
 
        </div>
      </div>
      <div class="w-3/12">
        <p class="font-bold">Property Price Trends</p>
        <Bar
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :css-classes="cssClasses"
          :styles="styles"
          :width="width"
          :height="height"
        />
            </div>
    </div>
  </div>
</template>
  