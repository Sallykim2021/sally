<template>
  <div id="nz-video-player">
    <v-container fluid class="pa-0 ma-1">
      <v-row no-gutters class="pa-0 ma-0">
        <!-- Main Section -->
        <v-col class="pa-0 ma-0" cols="12" sm="12" md="8" lg="9" xl="10">
          <video
            id="my-player"
            class="pt-0 pl-0 pr-1 pb-1 ma-0 max-w-sm video-js aspect-w-16 aspect-h-9"
            controls
            preload="auto"
            data-setup="{}"
          >
            <source :src="options.src" :type="options.type" />
          </video>
          {{ $route.params.slug }}
        </v-col>
        <!-- Sidebar Section -->
        <v-col cols="12" sm="12" md="4" lg="3" xl="2">
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
import NZVideoTrending from "./NZVideoTrending.vue";
export default {
  name: "nz-video-player",
  components: { NZVideoTrending },
  props: {
    options: {
      type: Object,
      default() {
        return {
          src: "",
          type: "",
        };
      },
    },
  },
  data() {
    return {
      player: null,
      trendingOptions: { title: "Trending Videos This Week" },
      videoTrendingList: [],
    };
  },
  mounted() {
    this.getTrendPages();
  },
  methods: {
    getTrendPages() {
      this.$http
        .get(
          `/api/v2/pages/?fields=author,title,views,comments,first_published_at` +
            `&type=videos.VideoClipPage&order=-views&limit=7`
        )
        .then((response) => {
          this.videoTrendingList = response.data.items;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
video {
  /* override other styles to make responsive */
  width: 100% !important;
  /* height: auto !important; */
}
</style>
