<template>
  <div id="nz-newstv">
    <v-card tile elevation="0" class="mx-auto" max-width="1440">
      <LazyYoutube
        max-width="1440px"
        :src="newstvlist[__curTvIndex__].liveurl"
        aspect-ratio="16:9"
        thumbnail-quality="standard"
      >
      </LazyYoutube>

      <v-card-actions max-height="20" class="ma-0 py-0 pl-1">
        <v-btn
          text
          x-small
          tile
          class="primary text-subtitle-2 text-uppercase font-weight-normal"
        >
          Technology
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          text
          x-small
          tile
          class="primary font-weight-normal"
          @click="curTvIndex = 0"
        >
          1
        </v-btn>
        <v-btn
          text
          x-small
          tile
          class="primary font-weight-normal"
          @click="curTvIndex = 1"
        >
          2
        </v-btn>
        <v-btn
          text
          x-small
          tile
          class="primary font-weight-normal"
          @click="curTvIndex = 2"
        >
          3
        </v-btn>
        <v-btn
          text
          x-small
          tile
          class="primary font-weight-normal"
          @click="curTvIndex = 3"
        >
          4
        </v-btn>
        <v-btn icon x-small @click="show = !show" class="font-weight-normal">
          <v-icon class="font-weight-black">{{
            show ? "icon-arrow-up" : "icon-arrow-down"
          }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-card-title class="pt-0 pl-1">
        <div class="headerClass">
          {{ newstvlist[__curTvIndex__].title }}
        </div>
      </v-card-title>

      <v-card-subtitle class="pt-0 pl-1">
        {{ newstvlist[0].authors }},{{
          computeTimeAgo(newstvlist[__curTvIndex__].meta.first_published_at)
        }}
      </v-card-subtitle>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>
          <v-card-text>
            <div class="headerClass">
              {{ newstvlist[__curTvIndex__].introduction }}
            </div>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";
export default {
  name: "nz-newstv",
  components: {
    LazyYoutube,
  },
  data() {
    return {
      newstvlist: [],
      curTvIndex: 2,
      show: false,
    };
  },
  computed: {
    __curTvIndex__: function () {
      const len = this.newstvlist.length;
      return this.curTvIndex % len;
    },
    showTitle: function () {
      let showtitle = true;
      if (this.inHome === "true") {
        showtitle = false;
      }
      return showtitle;
    },
  },
  props: [],
  mounted() {
    this.getPages();
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
    getPages() {
      this.$http
        .get(
          `/api/v2/pages/?type=home.NewsTVPage&fields=*&order=-first_published_at&limit=4`
        )
        .then((response) => {
          this.newstvlist = response.data.items;
        });
    },
    computeTimeAgo(first_published_at) {
      const eventDate = new Date(first_published_at);
      const nowDate = new Date();
      const interval = nowDate.getTime() - eventDate.getTime();
      const days = Math.floor(interval / (24 * 3600 * 1000));
      if (days > 9) {
        const yyyy = eventDate.getFullYear();
        const mm = eventDate.getMonth() + 1;
        const dd = eventDate.getDate();
        return `${yyyy}-${mm}-${dd}`;
      }
      if (days > 0) {
        return days + "d";
      }
      const hours = Math.floor(interval / (3600 * 1000));
      if (hours > 0) {
        return hours + "h";
      }
      const minutes = Math.floor(interval / (60 * 1000));
      if (minutes > 0) {
        return minutes + "m";
      }
      const seconds = Math.floor(interval / 1000);
      if (seconds > 0) {
        return seconds + "s";
      } else {
        return "Just now";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
