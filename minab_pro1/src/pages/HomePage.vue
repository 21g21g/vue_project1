<script setup>
import footerDisplay from "../components/footerDisplay.vue";
import mainBody from "../components/mainBody.vue";
import navBar from "../components/navBar.vue";
</script>
<template>
    <div>
  
  <div class="flex flex-col"> 
    <div class="flex items-start justify-end"><navBar/></div>
     <div class="flex justify-center items-center"> <mainBody/></div>
          
      <div class="flex justify-start items-end"><footerDisplay /></div>
  </div>
</div>
</template>