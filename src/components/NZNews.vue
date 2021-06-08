<template>
  <div id="nz-news">
    <v-container fluid class="pa-0 ma-2">
      <v-row no-gutters class="pa-0 ma-0">
        <!-- Main Section -->
        <v-col class="pa-0 ma-0" cols="12" sm="12" md="8" lg="9" xl="9">
          <v-row no-gutters class="ma-0 pa-0 mb-2">
            <v-col
              class="pt-0 pl-0 pr-2 pb-2 ma-0"
              cols="12"
              sm="12"
              md="12"
              lg="12"
              xl="6"
              v-for="(newsIndex, index) in currentPageNewsList"
              :key="index"
            >
              <NZNewsIndex :options="newsIndex" />
            </v-col>
          </v-row>
          <!-- Pagination -->
          <v-pagination
            v-model="currentPage"
            :length="totalPages"
            :total-visible="visiblePages"
            @next="getPages"
            @previous="getPages"
            @input="getPages"
          ></v-pagination>
        </v-col>

        <!-- Sidebar Section -->
        <v-col class="py-0 pr-0 pl-0 ma-0" cols="12" sm="12" md="4" lg="3" xl="3">
          <NZNewsTrending
            :trendingTitle="trendingOptions.title"
            :trendingList="newsTrendingList"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NZNewsIndex from "./NZNewsIndex.vue";
import NZNewsTrending from "./NZNewsTrending.vue";

export default {
  name: "nz-news",
  components: { NZNewsIndex, NZNewsTrending },
  props: [],
  data() {
    return {
      currentPageNewsList: [],
      currentPage: 1,
      totalPages: 5,
      visiblePages: 7,
      pageSize: 5,
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
        .get(
          `/api/v2/pages/?fields=author,title,introduction,slug,views,comments,date` +
            `&type=news.NewsContentPage&offset=${this.pageOffset}&limit=${this.pageSize}`
        )
        .then((response) => {
          this.totalPages = Math.ceil(response.data.meta.total_count / this.pageSize);
          this.currentPageNewsList = response.data.items;
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
  computed: {
    pageOffset: function () {
      return (this.currentPage - 1) * this.pageSize;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
