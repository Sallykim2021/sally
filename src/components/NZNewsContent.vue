<template>
  <div id="nz-news-content">
    <v-container fluid class="pa-0">
      <v-row>
        <!-- Main Section -->
        <v-col cols="12" sm="12" md="8" lg="9" xl="10">
              {{$route.params.slug}}
        </v-col>
        <!-- Sidebar Section -->
        <v-col cols="12" sm="12" md="4" lg="3" xl="2">
          <NZNewsTrending :trendingTitle="trendingOptions.title"
                          :trendingList="newsTrendingList" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

import NZNewsTrending from "./NZNewsTrending.vue";
export default {
  name: "nz-news-content",
  components: { NZNewsTrending },
  props: [],
  data() {
    return {
      newsArticle: {
        type: Object,
      },
      trendingOptions: { title: "Trending News This Week" },
      newsTrendingList: [],
    };
  },
  mounted() {
    this.getPages();
    this.getTrendPages();
  },
  methods: {
    getPages() {
      this.$http
          .get(`/api/v2/pages/?fields=*&type=news.NewsContentPage&slug=${this.$route.params.slug}`)
          .then((response) => {
            this.newsArticle = response.data.items[0];
          });
    },
    getTrendPages() {
      this.$http
          .get(`/api/v2/pages/?fields=author,title,slug,views,comments,date,first_published_at`
              + `&type=news.NewsContentPage&order=-views&limit=7`)
          .then((response) => {
            this.newsTrendingList = response.data.items;
          });
    },
  }
}
</script>

<style scoped>

</style>