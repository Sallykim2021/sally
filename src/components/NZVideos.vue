<template>
  <div id="nz-videos">
    <v-container fluid class="pa-0 ma-2">
      <v-row no-gutters class="pa-0 ma-0">
        <!-- Main Section -->
        <v-col class="pa-0 ma-0" cols="12" sm="12" md="8" lg="9" xl="9">
          <v-row no-gutters class="ma-0 pa-0">
            <v-col
              class="pt-0 pl-0 pr-2 pb-2 ma-0 mb-2"
              cols="12"
              sm="12"
              md="4"
              lg="3"
              xl="2"
              v-for="(videOption, index) in videoClipList"
              :key="index"
            >
              <NZVideoClip class="" :options="videOption" />
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
          <NZVideoTrending
            :trendingTitle="trendingOptions.title"
            :trendingList="videoTrendingList"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NZVideoClip from "./NZVideoClip.vue";
import NZVideoTrending from "./NZVideoTrending.vue";
export default {
  name: "nz-videos",
  components: { NZVideoClip, NZVideoTrending },
  props: ["msg"],
  data() {
    return {
      videoClipList: [],
      currentPage: 1,
      totalPages: 5,
      visiblePages: 7,
      pageSize: 8,
      trendingOptions: { title: "Trending Videos This Week" },
      videoTrendingList: [],
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
          `/api/v2/pages/?fields=*&type=videos.VideoClipPage` +
            `&offset=${this.pageOffset}&limit=${this.pageSize}`
        )
        .then((response) => {
          this.totalPages = Math.ceil(response.data.meta.total_count / this.pageSize);
          this.videoClipList = response.data.items;
        });
    },
    getTrendPages() {
      this.$http
        .get(
          `/api/v2/pages/?fields=author,title,slug,views,comments,first_published_at` +
            `&type=videos.VideoClipPage&order=-views&limit=7`
        )
        .then((response) => {
          this.videoTrendingList = response.data.items;
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
