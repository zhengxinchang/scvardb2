<template>
  <v-app>



      <header-bar></header-bar>

<!--      <div style="margin: 0 auto">-->
<!--        <div style="text-align: center" class="text-h4">-->
<!--          scVardb-->
<!--        </div>-->
<!--      </div>-->
    <v-sheet  >
      <v-row align="center" >
        <v-col cols="12" xl="1" lg="1" md="1" sm="1"  >

        </v-col>
        <v-col cols="12" xl="10" lg="10" md="10" sm="10" >
          <v-tabs centered class="mb-1"
                  v-model="$store.state.currtab"
                  show-arrows
          >
            <v-tab style="text-transform: none" class="black--text"
                   to="/"
            >
              <v-icon size="18" color="black">mdi-home</v-icon>Home
            </v-tab>
            <v-tab style="text-transform: none" class="px-0">

              <v-menu offset-y open-on-hover close-delay="400" >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      tile
                      class="black--text "
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      id="browseTabID"
                      style="text-transform: none"
                      elevation="0"
                      height="100%"

                      width="100%"
                  >
                    <v-icon size="18">mdi-magnify</v-icon> &nbsp; Browse <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list

                    class="text-left "

                >
                  <v-list-item
                      to="/browse-project"
                      color="white"
                      @click="changeTab(1)"
                  >
                    <v-list-item-title
                        class="text-body-2 grey--text text--darken-3" >
                      <v-icon color="grey darken-1" szie="18">mdi-chemical-weapon</v-icon>
                      &nbsp; Project
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_association"
                      color="white"
                      @click="changeTab(1)"
                  >
                    <v-list-item-title class="text-body-2 grey--text text--darken-3">
                      <v-icon color="grey darken-1" szie="18 " >mdi-chemical-weapon</v-icon>
                      &nbsp; Patient
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_association"
                      color="white"
                      @click="changeTab(1)"
                  >
                    <v-list-item-title class="text-body-2 grey--text text--darken-3">
                      <v-icon color="grey darken-1" szie="18 " >mdi-chemical-weapon</v-icon>
                      &nbsp; Sample
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-tab>


            <v-tab style="text-transform: none" class="px-0">
              <v-menu offset-y open-on-hover close-delay="400" >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      class="black--text "
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      id="browseTabID"
                      style="text-transform: none"
                      elevation="0"
                      height="100%"
                      width="100%"
                  >
                    <v-icon size="18">mdi-family-tree</v-icon> &nbsp; scVariant Landscape <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list

                    class="text-left "

                >
                  <v-list-item
                      to="/browse_association"
                      color="white"
                      @click="changeTab(2)"
                  >
                    <v-list-item-title class="text-body-2 grey--text text--darken-3" >
                      <v-icon color="grey darken-1" szie="18">mdi-chemical-weapon</v-icon>
                      &nbsp; Cancer
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_association"
                      color="white"
                      @click="changeTab(2)"
                  >
                    <v-list-item-title class="text-body-2 grey--text text--darken-3">
                      <v-icon color="grey darken-1" szie="18 " >mdi-chemical-weapon</v-icon>
                      &nbsp; Individual
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>


            </v-tab>

            <v-tab style="text-transform: none" class="px-0">

              <v-menu offset-y open-on-hover close-delay="400" >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      class="black--text "
                      color="white"
                      v-bind="attrs"
                      v-on="on"
                      id="browseTabID"
                      style="text-transform: none"
                      elevation="0"
                      height="100%"
                      width="100%"
                  >
                    <v-icon size="18">mdi-liquid-spot</v-icon> &nbsp;Heterogeneity <v-icon>mdi-menu-down</v-icon>
                  </v-btn>
                </template>
                <v-list

                    class="text-left "

                >
                  <v-list-item
                      to="/browse_association"
                      color="white"
                      @click="changeTab(3)"
                  >
                    <v-list-item-title class="text-body-2 grey--text text--darken-3" >
                      <v-icon color="grey darken-1" szie="18">mdi-chemical-weapon</v-icon>
                      &nbsp; Intra-Tumor
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                      to="/browse_association"
                      color="white"
                      @click="changeTab(3)"
                  >
                    <v-list-item-title class="text-body-2 grey--text text--darken-3">
                      <v-icon color="grey darken-1" szie="18 " >mdi-chemical-weapon</v-icon>
                      &nbsp; Inter-Tumor
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>


            </v-tab>

            <v-tab style="text-transform: none" class="black--text" to="/stats">
              <v-icon color="black" size="18">mdi-book-outline</v-icon>&nbsp;Statistics
            </v-tab>

            <v-tab style="text-transform: none" class="black--text " to="/help">
              <v-icon  color="black" size="18">mdi-heart</v-icon>&nbsp;Help
            </v-tab>

          </v-tabs>
        </v-col>

        <v-col cols="12" xl="1" lg="1" md="1" sm="1"  class="text-center" >
          <v-icon color="black" size="16" >mdi-cog-outline mdi-spin</v-icon> beta
        </v-col>
      </v-row>

    </v-sheet>








    <v-main class="mt-2">
      <router-view/>
    </v-main>
    <v-sheet height="50"></v-sheet>
    <footer-bar></footer-bar>
  </v-app>
</template>

<script>

import HeaderBar from "@/components/HeaderBar";
import FooterBar from "@/components/FooterBar";
export default {
  name: 'App',
  components: {FooterBar, HeaderBar},
  data: () => ({
    barcolor:"white"
  }),
  methods:{
    changeTab(t){
      this.$store.state.currtab=t
    }
  }
};
</script>
