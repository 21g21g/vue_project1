<script setup>
import { useRouter } from 'vue-router';
//how i make my div place at the middle
import {projectoneStore} from "../stores/projectOneStore"
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
const project=projectoneStore()
//make server for graphql
const searchText=ref("")
const router=useRouter()
    const handleClick=()=>{
        // router.push({name:searchText})
   project.addName(searchText.value)

    }
</script>
<template>

<div class="flex flex-col justify-center items-center  m-36">
<div class="p-2 m-6 w-1/3 flex justify-center items-center">
    <img src="../assets/Capture.JPG"/>
</div>

    
    <div  class="w-96 border-2 border-zinc-400 rounded-md flex justify-between gap-6">
       
       <router-link :to="`/${searchText}`"><Icon  icon="material-symbols-light:search" class="flex items-center mt-2 cursor-pointer" style="color: #726969" @click="handleClick" /></router-link>
 
    <!-- material-symbols-light:search -->
    <!-- <h3>icon</h3> -->
     <input type="text" v-model="searchText" class="w-full">
    <Icon icon="clarity:keyboard-solid"  style="color: #726969" class="mt-2 cursor-pointer" />
    
</div>
   
    <!-- <h3>icon</h3> -->
    <!-- <Icon class="cursor-pointer " style="color:black;" icon="mdi-light:MaterialSymbolsLightSearch" /> -->
   
<div class="flex flex-row   gap-6 mt-6">
    <button class="bg-slate-300 p-1">google ፍለጋ</button>
    <button class="bg-slate-300 p-1">እድለኛ ነኝ</button>
</div>
<div class="mt-5">
    <h6 class="text-sm">Google በዚህ ይቀርባል:- 
      <span class="text-sm"><a class="text-blue-700" href="#">English</a> <a class="text-blue-700" href="#">somalia</a> <a class="text-blue-700" href="#">Afan oromo</a></span>
    </h6>
</div>

</div>
</template>