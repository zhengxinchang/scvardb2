<template>
  <v-sheet>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="11">
        <v-sheet class="text-left">
          <breadcrumbs :items="breadcrumbItems"></breadcrumbs>
        </v-sheet>
        <v-sheet
        :style="{
          background: 'url('+bgimg+')',
          borderRadius:'5px 5px 5px 5px',
          backgroundPosition: '50% -10px',
           backgroundSize:'100%',
          }"
        class="mb-6"
        min-height="250"
        >
          <v-row>
            <v-col cols="12" xl="6" lg="6" md="12" sm="12" >
            <v-card class="mx-10 mt-10" >
              <v-sheet class="mx-10 py-8 text-body-1" >
                <span class="font-weight-bold" :style="{color:$store.state.mainColor} ">scVardb</span> <span>is a publicly available database for storing and parsing tumor somatic mutation landscapes at the single cell level</span>
              </v-sheet>

            </v-card>
            </v-col>
            <v-col  align-self="center" cols="12" xl="6" lg="6" md="12" sm="12">
              <v-card class="mx-6 mt-8 mb-4 pa-3" elevation="10">

                  <v-text-field
                      outlined

                      append-icon="mdi-magnify mdi-36px"
                      background-color="white "
                      class="black--text"
                      clearable
                      prepend-inner-icon="mdi-chevron-right"
                      color="black" filled
                      dense
                      hide-details
                      outlined
                  >

                  </v-text-field>
                  <v-sheet class="text-body-2">
                    Examples:
                  </v-sheet>

              </v-card>


            </v-col>

            <v-col cols="12">
              <v-sheet rounded class="z-transparent py-2 px-10 mb-2 " dark >


                <div class="text-left">
                  <v-icon size="16">mdi-information-outline</v-icon>
                  <span>To get the best experience, please visit us using the latest version of Google Chrome, Microsoft Edge or Firefox.</span>
                </div>
              </v-sheet>

            </v-col>
          </v-row>
        </v-sheet>

        <v-sheet>
          <v-row>
            <v-col xl="7" lg="7" md="12" sm="12" cols="12">
              <v-sheet  class="text-body-1 pl-1" :style="{color:$store.state.mainColor}" >
              <v-icon size="20" :color="$store.state.mainColor">mdi-chart-bar</v-icon>  Statistics
              </v-sheet>
              <v-sheet outlined rounded height="300" class="overflow-y-auto ">

                <v-card  class="pb-4" elevation="0" height="90%">
<!--                  <v-card-title :style="{'color':$store.state.mainColor}"></v-card-title>-->
                  <v-card-text>
                    <v-row>
                      <v-spacer></v-spacer>
                      <v-col cols="11">
                        <v-row>
                          <v-col v-for="item in statsdata" :key="item.name" cols="12" lg="4" md="4" sm="4" xl="4">
                            <v-hover v-slot="{ hover }">
                              <v-card
                                  :elevation="hover?4:0"
                                  :to="item.to"
                                  class="mx-0 pa-3 my-auto"
                                  tile
                                  min-height="80"

                              >

                                <v-sheet class="pt-6 text-center" >
                                  <v-progress-circular
                                      v-show="$store.state.stats ==null"
                                      :color="$store.state.mainColor"
                                      :size="35"
                                      :width="7"
                                      indeterminate
                                  ></v-progress-circular>

                                  <div v-show="$store.state.stats !=null" :style="{color: $store.state.mainColor}"
                                       class="text-h4"
                                  >
                                    <v-icon :color="item.color">{{ item.icon }} mdi-36px</v-icon>
                                    {{ item.num }}
                                  </div>
                                  <v-divider dark></v-divider>

                                  <div :class="[item.fontsize]" :style="{color: $store.state.mainColor}"
                                       v-html="item.name"></div>
                                </v-sheet>

                              </v-card>
                            </v-hover>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-spacer></v-spacer>
                    </v-row>
                  </v-card-text>

                </v-card>


              </v-sheet>
            </v-col>
            <v-col xl="5" lg="5" md="12" sm="12" cols="12">
              <v-sheet   class="text-body-1 pl-1" :style="{color:$store.state.mainColor}"  >
                <v-icon size="20" :color="$store.state.mainColor">mdi-newspaper-variant-multiple</v-icon>  Recent Updates
              </v-sheet>
              <v-sheet outlined rounded height="300" class="overflow-y-auto">
                <v-sheet class=" mx-2" >
<!--                  <v-timeline align-top dense>-->
                    <v-sheet v-for="item in news" :key="item.text"  class="py-1">
                      <v-sheet color="#3ea8ff" >
                        <v-row class="mr-2" justify="space-between"    no-gutters>
                          <v-col class="text-left" cols="3">
                            <v-sheet class="py-5 px-2 text-center text-body-2 " :color="$store.state.mainColor" dark>
                              {{ item.date }} &nbsp;
                            </v-sheet>
                          </v-col>
                          <v-col class="text-left   text-body-1" cols="9">
                            <v-sheet class=" px-2  py-4 "  color="#3ea8ff" dark >
                              {{ item.text }}
                            </v-sheet>

                          </v-col>


                        </v-row>
                      </v-sheet>


                    </v-sheet>

<!--                  </v-timeline>-->
                </v-sheet>

              </v-sheet>
            </v-col>
          </v-row>
          <v-row>


            <v-col xl="2" lg="2" md="6" sm="12" cols="12">
              <v-sheet  class="text-body-1 pl-1 " :style="{color:$store.state.mainColor}" >
                <v-icon size="20" :color="$store.state.mainColor">mdi-account-question-outline</v-icon>  FAQ & Docs
              </v-sheet>
              <v-sheet outlined rounded min-height="200" max-height="200" class="overflow-y-auto px-3 py-6 text-body-2 text-justify">
                <v-sheet>
                  If you have any question or would like to give us any suggestion/comment or report a bug, please feel free to contact us.
                  Email: scvardb@big.ac.cn.
                </v-sheet>
                <v-sheet class="mt-1">
                  The documentation is available at here.
                </v-sheet>

              </v-sheet>
            </v-col>
            <v-col xl="3" lg="3" md="6" sm="12" cols="12">
              <v-sheet   class="text-body-1 pl-1" :style="{color:$store.state.mainColor}"  >
                <v-icon size="20" :color="$store.state.mainColor">mdi-vector-link</v-icon> Related Links
              </v-sheet>
              <v-sheet outlined rounded min-height="200" max-height="200" class="overflow-y-auto px-3">
                  <v-list  >
                    <v-list-item v-for="(item,idx) in relatedlinks" :key="idx" class="align--center" :href="item.href"
                                 target="_blank">
                      <v-sheet class="text-left align--center" >
                        <v-icon>mdi-link-variant</v-icon> &nbsp;
                        <span class="black--text font-weight-bold mr-3" style="white-space: nowrap">{{ item.name }}</span>

                        <img style="display: inline-block;border: 1px solid darkgrey" height="20" :src="item.logo"></img>

                      </v-sheet>

                    </v-list-item>


                  </v-list>

              </v-sheet>
            </v-col>
            <v-col xl="7" lg="7" md="12" sm="12" cols="12">
              <v-sheet   class="text-body-1 pl-1" :style="{color:$store.state.mainColor}"  >
                <v-icon size="20" :color="$store.state.mainColor">mdi-comment-quote-outline</v-icon>  How to cite
              </v-sheet>
              <v-sheet outlined rounded min-height="200" max-height="200" class="overflow-y-auto px-3 py-6">
                <v-sheet class="font-weight-bold text-h6">Recommended citation style:</v-sheet>
                <v-sheet class="mt-2">
                  The data reported in this paper have been deposited in the svVardb (https://ngdc.cncb.ac.cn/scvardb) in National Genomics Data Center [1], Beijing Institute of Genomics, Chinese Academy of Sciences/China National Center for Bioinformation.
                </v-sheet>
                <v-sheet class="mt-2">
                  <b>References:</b> [1] Database Resources of the National Genomics Data Center, China National Center for Bioinformation in 2022. Nucleic Acids Res 2022, 50(D1):D27-D38 [PMID=34718731].
                </v-sheet>

              </v-sheet>
            </v-col>
          </v-row>
<!--          <v-row>-->
<!--            <v-col cols="12">-->
<!--              <v-sheet  class="text-body-1 pl-1" :style="{color:$store.state.mainColor}" >-->
<!--                <v-icon size="20" :color="$store.state.mainColor">mdi-flower-outline-->
<!--                </v-icon>  Acknowledgement-->
<!--              </v-sheet>-->
<!--              <v-sheet outlined rounded min-height="100"></v-sheet>-->
<!--            </v-col>-->
<!--          </v-row>-->
        </v-sheet>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

  </v-sheet>
</template>

<script>
import Breadcrumbs from "@/components/breadcrumbs";
export default {
  name: "home",
  components: {Breadcrumbs},
  data(){
    return{
      breadcrumbItems:[
        {
          text: 'scVardb',
          disabled: false,
          href: '/',
        },
        {
          text: 'home',
          disabled: true,
          href: 'breadcrumbs_dashboard',
        },
      ],
      bgimg:require("../assets/bg1.jpg"),
      relatedlinks: [
        {
          href: "http://cailab.labshare.cn/cancertracer/index.html",
          icon: "mdi-link-variant",
          name: "CancerTracer",
          logo: require('../../public/imgs/cancertracer.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/ccas/#/",
          icon: "mdi-link-variant",
          name: "CCAS",
          logo: require('../../public/imgs/CCASlogo.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/ascancer/home",
          icon: "mdi-link-variant",
          name: "ASCancer Atlas",
          logo: require('../../public/imgs/ascancer_atlas.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/gsa-human/",
          icon: "mdi-link-variant",
          name: "GSA-Human",
          logo: require('../../public/imgs/gsahuman.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/omix/",
          icon: "mdi-link-variant",
          name: "OMIX",
          logo: require('../../public/imgs/omix.png'),
        },
        {
          href: "https://ngdc.cncb.ac.cn/cancerscem/",
          icon: "mdi-link-variant",
          name: "CancerSCEM",
          logo: require('../../public/imgs/cancersem.png'),
        },

      ],
      news: [
        {
          date: "2022/11/09",
          text: "Bugs fix and code clean."
        },
        {
          date: "2022/08/23",
          text: "Bugs fix and code clean."
        },
        {
          date: "2022/07/19",
          text: "Enrichment tool was released."
        },
        {
          date: "2022/06/14",
          text: "Knowledge Graph was released."
        },
        {
          date: "2022/06/13",
          text: "MACdb version 1 was released."
        },
      ],
    }
  },
  computed:{
    statsdata() {
      return [
        {
          to: "/browse_association",
          icon: "mdi-chemical-weapon",
          name: "Cancer types",
          color: "teal",
          fontsize: 'text-h5',
          num: "0"

        },

        {
          to: "/browse_association",
          icon: "mdi-flask-empty-outline",
          name: "Projects",
          color: "orange",
          fontsize: 'text-h5',
          num:  "0"
        },
        {
          to: "/browse_trait",
          icon: "mdi-star-four-points",
          name: "Individuals",
          color: "purple",
          fontsize: 'text-h5',
          num: "0"
        },
        {
          to: "/statistics",
          icon: "mdi-liquid-spot",
          name: "Samples",
          color: "red",
          fontsize: 'text-h5',
          num:  "0"
        },
        {
          to: "/browse_study",
          icon: "mdi-opacity",
          name: "Single cells",
          color: "indigo",
          fontsize: 'text-h5',
          num:  "0"
        },
        {
          to: "/browse_publication",
          icon: "mdi-book",
          name: "Variants",
          color: "blue",
          fontsize: 'text-h5',
          num: "0"
        },

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