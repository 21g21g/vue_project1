<script setup>
import  gql  from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { ref } from 'vue';
//query image ,all details by card
//  const countries = ref([]);
//episode picture select from the characters character name,detail
//design by figma 
 const { result }=useQuery(gql`
query{
    countries{
        name
        emoji
        capital
    }
}

`)
// console.log(result?.countries||[])

// countries.value=result.value?.countries || []

</script>

<template>
  
    
   
   
   <div  v-for="country in result?.countries || []" :key="country" class=" items-center ml-2 flex-row " > 
         <div class="bg-red-100  ml-1  mt-3 mr-1 p-2 flex flex-col w-96">  
        <div>
        <!-- <p> {{result.name}}</p> -->
        </div>
      <div >
    <p>{{country.emoji}}</p>
    <p>{{country.capital}}</p>
    </div>
     
    
    </div>
    </div>
   
  
    
    
   
      
    
  
</template>
