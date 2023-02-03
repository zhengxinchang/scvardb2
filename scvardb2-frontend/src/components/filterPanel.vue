<template>
<v-sheet>
  <v-sheet height="40">
    <v-btn elevation="0" small @click="isExpand=true" :color="$store.state.mainColor"  dark v-show="!isExpand" class="my-2" style="text-transform: none"> <v-icon>mdi-chevron-double-down</v-icon> Filter</v-btn>

  </v-sheet>
  <v-expand-transition>
    <v-sheet outlined rounded elevation="1"  v-show="isExpand">
      <v-sheet   class="text-right"><v-btn elevation="0" :color="$store.state.mainColor"  dark  @click="isExpand=false"  class="my-2 mr-1" style="text-transform: none" small> <v-icon>mdi-chevron-double-up</v-icon>Hide</v-btn></v-sheet>
      <slot>


      </slot>
    </v-sheet>
  </v-expand-transition>

</v-sheet>
</template>

<script>
export default {
  name: "filterPanel",
  data(){
    return{
      isExpand:true
    }
  }
}
</script>

<style scoped>
.z-transparent {
  background-color: transparent !important;
  opacity: 2;
  border-color: transparent !important;
}
</style>