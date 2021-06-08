<template>
  <div id="nz-video-clip">
    <v-card elevation="0" class="mx-auto" max-width="1440">
      <LazyYoutube
        max-width="1440px"
        :src="options.liveurl"
        aspect-ratio="16:9"
        thumbnail-quality="standard"
      />

      <v-card-actions max-height="20" class="ma-0 py-0">
        <v-btn
          text
          x-small
          tile
          class="primary text-subtitle-2 text-uppercase font-weight-normal"
        >
          Technology
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>

      <v-card-title class="pt-0 text-subtitle-1">
        <!-- {{ options.title }} -->
        <div class="headerClass">
          <!-- <a :href="url" @click="transHtml(options.meta.html_url)">{{ options.title }}</a> -->
          {{ options.title }}
        </div>
      </v-card-title>

      <v-card-subtitle class="pt-0 pb-0 text-subtitle-2">
        <div class="headerClass">
          {{ options.author }}
        </div>
      </v-card-subtitle>
      <v-toolbar height="30" elevation="0" class="text-body-2 py-0">
        <v-row no-gutters>
          <v-col class="text-truncate py-0" cols="6">
            <v-icon class="icon-time py-0"></v-icon>{{ options.date }}
          </v-col>
          <v-col class="text-truncate py-0" cols="3">
            <v-icon class="icon-view py-0"></v-icon>{{ options.views }}
          </v-col>
          <v-col class="text-truncate py-0" cols="3">
            <v-icon class="icon-comment py-0"></v-icon>{{ options.comments }}
          </v-col>
        </v-row>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";
export default {
  name: "nz-video-clip",
  components: {
    LazyYoutube,
  },
  data() {
    return {
      show: false,
      url: "",
    };
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          src: "",
          type: "video/mp4",
        };
      },
    },
  },
  mounted() {
    // this.$refs['lazyVideo'].playVideo();
  },
  methods: {
    handleClick(event, ref) {
      this.$refs[ref][event]();
    },
    handleSearch(e, platform) {
      if (platform === "youtube") this.youtubeLink = e.target.value;
      else this.vimeoLink = e.target.value;
    },
    transHtml(html_url) {
      this.url = html_url.replace("videos", "#/videos");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerClass {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

a {
  color: black;
  text-decoration: none;
}
a:hover {
  color: black;
  text-decoration: underline;
}
</style>
