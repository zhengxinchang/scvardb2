<template>
<!--  color="#0c64b6"-->
  <v-system-bar  height="30" color="#0c64b6" style="font-family: Arial">
    <nav class="bigd-navbar-default header-fixed">
      <!-- Note: delete class bigd-container -->
      <div class="">
        <div class="bigd-navbar-header">
          <button type="button" class="bigd-navbar-toggle bigd-collapsed uilay">
            <span class="bigd-sr-only">Toggle navigation</span>
            <span class="bigd-icon-bar"></span>
            <span class="bigd-icon-bar"></span>
            <span class="bigd-icon-bar"></span>
          </button>
          <a href="https://www.cncb.ac.cn/" class="bigd-navbar-brand"
            ><img src="@/assets/img/cncb-nav.png" class="bigd-img-responsive"
          /></a>
          <a href="https://ngdc.cncb.ac.cn/" class="bigd-navbar-brand"
            ><img src="@/assets/img/ngdc-nav.png" class="bigd-img-responsive"
          /></a>
        </div>
        <div class="bigd-collapse bigd-navbar-collapse r-layout" id="bigd-coll">
          <ul class="bigd-nav bigd-navbar-nav bigd-navbar-right uilay">
            <li>
              <a :href="bigd_site + 'databases'" target="_blank"> Databases</a>
            </li>
            <li><a :href="bigd_site + 'tools'" target="_blank">Tools</a></li>
            <li>
              <a :href="bigd_site + 'standards'" target="_blank">Standards</a>
            </li>
            <li>
              <a :href="bigd_site + 'publications'" target="_blank"
                >Publications</a
              >
            </li>
            <li><a :href="bigd_site + 'about'" target="_blank">About</a></li>
          </ul>
        </div>
      </div>
    </nav>


      <slot></slot>



  </v-system-bar>
</template>

<script>
export default {
  name: "HeaderBar",
  data() {
    return {
      bigd_site: "https://bigd.big.ac.cn/",
    };
  },
};
</script>
<style scoped>
/* @import url('https://bigd.big.ac.cn/css/page.min.css'); */
@import url("../assets/css/page.min.css");
.bigd-navbar-default {
  background-color: #0c64b6;
  margin-bottom: 0;
  width: 100%;
}

/* .imgLayout {
  height: 100%;
  max-width: 5%;
} */

/* 控制div始终位于距页面右侧3px */
/* .uilay {
  position: fixed;
  right: 3%;
} */

.uilay {
  position: sticky;
  position: -webkit-sticky;
  top: 30px;
}
</style>
