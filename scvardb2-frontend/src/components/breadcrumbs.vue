<template>
  <v-breadcrumbs
      :items="items"
      class="ma-0 px-0"
      divider=">"
  >

  </v-breadcrumbs>
</template>

<script>
export default {
  name: "breadcrumbs",
  props:["items"],

}
</script>

<style scoped>

</style>