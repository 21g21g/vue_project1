<script setup>
import GraphQl from "./pages/GraphQl.vue"
// see three methods to pass data to route compponent.
</script>
<template>

<div>
  <div class="flex flex-row justify-end gap-2 items-start mt-2 text-blue-700 mr-2">
  <!-- <router-link to="/">Home</router-link> -->
  </div> 
  <router-view></router-view>
 <div class="grid grid-cols-2 h-52">
  <GraphQl/>
  </div>
    
   
 
  
</div>
</template>


