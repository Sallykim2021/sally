<template>
  <div id="nz-home">
    <v-container fluid class="pa-0 ma-2">
      <v-row no-gutters class="pa-0 ma-0">
        <v-col class="pa-0 ma-0" cols="12" sm="12" md="8" lg="9" xl="9">
          <NZNewsTV class="pt-0 pl-0 pr-2 pb-2 ma-0" />
        </v-col>
        <v-col class="pa-0 ma-0" cols="12" sm="12" md="4" lg="3" xl="3">
          <v-col v-show="true" class="pa-0 ma-0" cols="12">
            <NZC3C4  class="pt-0 pl-0 pr-2 pb-2 mt-0 mb-0" />
          </v-col>
          <!-- <v-col class="pa-0 ma-0" cols="12">
            <NZTrending
              :trendingTitle="trendingOptions.title"
              :newsList="newsTrendingList"
            />
          </v-col> -->
          <!-- </v-row> -->
          <v-col class="pa-0 ma-0" cols="12">
            <NZNewsTrending
              :trendingTitle="trendingOptions.title"
              :trendingList="newsTrendingList"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NZNewsTV from "./NZNewsTV.vue";
import NZC3C4 from "./NZC3C4.vue";
// import NZNewsTrending from "./NZNewsTrending.vue";
import NZNewsTrending from "./NZNewsTrending.vue";

export default {
  components: { NZNewsTV, NZNewsTrending, NZC3C4 },
  name: "nz-home",
  props: ["msg"],

  data() {
    return {
      homepage: {},
      aboutUsIntroduction: "",
      trendingOptions: { title: "Trending News Today" },
      newsTrendingList: [],
    };
  },
  computed: {},
  mounted() {
    this.getPages();
    this.getAboutUsIntroduction();
    this.getTrendPages();
  },

  methods: {
    getPages() {
      this.$http
        .get("/api/v2/pages/?slug=home&fields=*&type=home.HomePage")
        .then((response) => {
          this.homepage = response.data.items[0];
        });
    },
    getAboutUsIntroduction() {
      this.$http
        .get("/api/v2/pages/?type=home.AboutUSPage&fields=introduction")
        .then((response) => {
          let data = response.data.items[0];
          if (data) {
            this.aboutUsIntroduction = data.introduction;
          }
        });
    },
    getTrendPages() {
      this.$http
        .get(
          `/api/v2/pages/?fields=author,title,slug,views,comments,first_published_at` +
            `&type=news.NewsContentPage&order=-views&limit=7`
        )
        .then((response) => {
          this.newsTrendingList = response.data.items;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
