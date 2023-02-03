<template>
<v-sheet>
  <v-row>
    <v-spacer></v-spacer>
    <v-col cols="11">
      <v-sheet>

      <breadcrumbs :items="breadcrumbData"></breadcrumbs>
      </v-sheet>
      <v-sheet>
        <v-row>

          <v-col cols="12">
            <filter-panel >

              <v-sheet  class="px-4" height="100">
                       Filters
              </v-sheet>

            </filter-panel>

          </v-col>
          <v-col cols="12">

            <v-data-table
            :headers="headerData"
            >
            </v-data-table>

          </v-col>

        </v-row>
      </v-sheet>

    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</v-sheet>
</template>

<script>
import Breadcrumbs from "@/components/breadcrumbs";
import FilterPanel from "@/components/filterPanel";
export default {
  name: "browseProject",
  components: {FilterPanel, Breadcrumbs},
  data(){
    return {
      breadcrumbData:[
        {
          text: 'scVardb',
          disabled: false,
          href: '/',
        },
        {
          text: 'browse',
          disabled: true,
          href: '/',
        },
        {
          text: 'project',
          disabled: true,
          href: '/',
        },
      ],
      headerData:[
        {
          text: '#',
          align: 'start',
          sortable: true,
          value: 'idx',
        },
        { text: 'Project ID', value: 'fat' },
        { text: 'BioProject ID', value: 'carbs' },
        { text: 'Project name', value: 'protein' },
        { text: 'Cancer type', value: 'iron' },
        { text: '#Patients', value: 'iron' },
        { text: '#Control', value: 'iron' },
        { text: '#Individual', value: 'iron' },
        { text: 'Operation', value: 'iron' },
      ]
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