<script setup>
//the girl in swing
import {  ref } from "vue";
import { useRoute } from "vue-router";
import { Icon } from '@iconify/vue';
import { projectoneStore } from "../stores/projectOneStore";

  const inputText = ref(" ")
  const project = projectoneStore();
  const route = useRoute();

inputText.value=project.cityName
</script>

<template>
    <div >
        <div class="flex flex-col ">
            <div class="flex flex-col">
                <div class="flex flex-row justify-between ">
                    <div class="flex flex-row gap-4">
                        <img src="../assets/Capture.JPG" class="w-16 ml-5" alt="City Image">
                        <div class="flex border rounded-md">
                         
                          <input type="text" v-model="inputText"  :placeholder="project.cityName">
                            <span class="flex flex-row items-center gap-2">
                           <Icon class="cursor-pointer size-6" icon="bitcoin-icons:cross-outline" style="color: #726969" /> 
                            <Icon icon="material-symbols-light:search" class="flex items-center mt-2 cursor-pointer size-6" style="color: #726969" />
                            </span>
                        </div>
                    </div>
                    <div class="flex flex-row gap-2 p-1 items-center">
                        <Icon icon="solar:settings-outline" class="cursor-pointer" style="color: #726969" />
                        <Icon icon="flowbite:grid-solid" style="color: #726969" class="mt-1 cursor-pointer" />
                        <button class="text-slate-100 bg-blue-700 rounded-sm">Sign in</button>
                    </div>
                </div>
                <div class="flex flex-row w-1/2 mt-4 justify-between">
                    <div class="flex flex-row items-center gap-3">
                        <div class="flex items-center gap-1"> <Icon icon="material-symbols-light:search" class="flex items-center mt-2 cursor-pointer size-6" style="color: #726969" />
                       <span>All</span> </div>
                      <div class="flex items-center gap-1"><Icon icon="material-symbols-light:imagesmode-outline" class="cursor-pointer"  style="color: #726969" />
                       <span>images</span></div>
                       <div class="flex items-center gap-1"> <Icon icon="simple-icons:googlemaps"  style="color: #726969" class="cursor-pointer" />
                       <span>Maps</span></div>
                      <div class="flex items-center gap-1"> <Icon icon="bx:news"  style="color: #726969" class="cursor-pointer"/>
                       <span>News</span></div>
                      <div class="flex items-center gap-1">
                       <Icon icon="bi:three-dots-vertical" class="cursor-pointer" style="color: #726969" />
                       <span>More</span></div>
                       
                    </div>
                    <div class="flex flex-row">
                        <h3>Tools</h3>
                    </div>
                </div>
            </div>
            <hr class="w-full mt-1">
            <div class="flex flex-row w-full m-2 gap-5">
                <div class="w-1/2 mb-3" >
                  <a href="#">https://www.gebeyheuaseega</a>
                  <h1 class="text-blue-700 text-lg">Bahrdar-<span>Wekipidia</span></h1>
                  <p class="text-sm">Bahir Dar is a city located in northwestern Ethiopia, situated on the southern shore of Lake Tana</p>
                  <div class="flex flex-row justify-between">
                    <h1>Zone-bahrdar special zone</h1>
                    <p>Elevation-18800m from earth</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <h1>Country:<span class="text-blue-700">Ethiopia</span></h1>
                        <p>Area code(+251)58</p>
                    </div>
                    <h1 class="text-blue-700">History,Geography,Demography Education</h1>
                    <div class="flex flex-col mt-4 ">
                       <div class="flex flex-row gap-4 items-center p-3">
                        <h1 class="font-semibold">People also ask</h1>
                         <Icon icon="bi:three-dots-vertical" class="cursor-pointer" style="color: #726969" />
                       </div>
                       <div class="flex flex-row justify-between items-center  p-3">
                        <p>What is bahrdar known for?</p>
                        <Icon class="size-6 cursor-pointer" icon="eva:arrow-ios-downward-fill"  style="color: #726969" />
                       </div>
                       <hr class="w-full"/>
                       <div class="flex flex-row justify-between items-center  p-3">
                        <p>What country is bahrdar?</p>
                        <Icon class="size-6 cursor-pointer" icon="eva:arrow-ios-downward-fill"  style="color: #726969" />
                        </div> <hr class="w-full"/>
                       <div class="flex flex-row justify-between items-center  p-3">
                         <p>Which Town is beautiful in ethiopia?</p>
                        <Icon class="size-6 cursor-pointer" icon="eva:arrow-ios-downward-fill"  style="color: #726969" />
                        </div> <hr class="w-full"/>
                       <div class="flex flex-row justify-between items-center  p-3">
                        <p>What is the name of bahrdar airport?</p>
                        <Icon class="size-6 cursor-pointer" icon="eva:arrow-ios-downward-fill"  style="color: #726969" />
                        </div> <hr class="w-full"/>
                    </div>
                  
                </div>
                <div class="w-1/2 border">
                <div class="w-1/3">
                <div class="flex flex-row">
                    <img src="../assets/bdrr.JPG"/>
                    <img src="../assets/bdgo.JPG"/>
                </div>
                <div class="flex flex-col pl-1">
                    <h1 class="font-semibold">Bahr dar</h1>
                    <p>city in ethiopia</p>
                </div>
                <hr class="w-full">
               
                    <p class="w-80 pl-1 mt-5">Bahir Dar is located at an elevation of around 1,840 meters (6,040 feet) above sea level.
The city is situated on the southern tip of Lake Tana, which is the largest lake in Ethiopia and a source of the Blue Nile River.</p>
<div class="flex flex-col gap-2 ml-1">  
    <div class="flex flex-row"><h1 class="font-semibold">Area:</h1><span>73km</span></div>
               <div class="flex flex-row">               <h1 class="font-semibold">Evaluation:</h1><span>1.80m</span>
           </div>
                <div class="flex flex-row">               <h1 class="font-semibold">Region:</h1><span>Amhara</span>
</div>
</div>
           <h3 class="mt-4 ml-1">Plan A trip</h3>  
           <div class="flex flex-row gap-3 items-center p-3">
            <Icon icon="ri:camera-fill" class="size-5 cursor-pointer" style="color: #726969" />
            <h2>Things to do</h2>
           </div>
                
                </div>
                </div>
            </div>
        </div>
    </div>
</template>