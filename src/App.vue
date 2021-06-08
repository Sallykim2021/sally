<template>
  <v-app class="pa-0 ma-0">
    <NZTopNav />
    <v-main class="grey lighten-3 ma-0 px-0 pb-0">
      <v-col cols="12" class="pa-0 ma-0">
        <NZHeader
          v-show="true"
          :nzheadertitle="homepage.title"
          :nzheaderdescription="homepage.introduction"
          inHome="true"
        />
      </v-col>
      <!-- 请不要在这里设置pa,在子组件里设置ma -->
      <v-col cols="12" class="pa-0 ma-0">
        <router-view></router-view>
      </v-col>
    </v-main>
    <NZFooter :bodytext="homepage.bodytext" />
  </v-app>
</template>

<script>
import NZTopNav from "./components/NZTopNav.vue";
import NZHeader from "./components/NZHeader.vue";
import NZFooter from "./components/NZFooter.vue";

export default {
  name: "App",
  components: {
    NZTopNav,
    NZHeader,
    NZFooter,
  },
  props: [],
  data() {
    return {
      homepage: {},
      message: "Welcome to Home application of NZVoice!",
    };
  },
  computed: {},
  mounted() {
    this.getPages();
  },

  methods: {
    getPages() {
      this.$http
        .get("/api/v2/pages/?slug=home&fields=*&type=home.HomePage")
        .then((response) => {
          this.homepage = response.data.items[0];
          console.log(this.homepage);
        });
    },
  },
};
</script>

<style></style>
