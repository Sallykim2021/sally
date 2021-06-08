<template>
  <v-container id="nz-trending" fluid class="pa-0">
    <v-card elevation="0" tile fill-height>
      <v-card-title
        class="ma-0 py-0 px-2 text-h6 white--text"
        style="background-color: #8f3455"
      >
        {{ trendingTitle }}
      </v-card-title>

      <div v-for="(trendingInfo, index) in trendingList" :key="index">
        <v-divider></v-divider>
        <v-card-subtitle class="text-over2-hidden py-2 text-h6">
          <a :href="url" @click="transHtml(trendingInfo.meta.html_url)">
            {{ trendingInfo.title }}</a
          >
        </v-card-subtitle>
        <v-col justify="start" class="px-2 pt-0 pb-2 text-body-2">
          <span class="group pl-0">
            <v-icon>icon-time</v-icon
            >{{ computeTimeAgo(trendingInfo.meta.first_published_at) }}
            <v-icon class="ml-1">icon-user</v-icon>{{ trendingInfo.author }}
            <v-icon class="ml-1">icon-view</v-icon>{{ computeViews(trendingInfo.views) }}
            <v-icon class="ml-1">icon-comment</v-icon>{{ trendingInfo.comments }}
          </span>
        </v-col>

        <!-- <v-toolbar height="30" elevation="0" class="text-caption justify py-0">
          <v-row no-gutters>
            <v-col class="text-truncate py-0" cols="3">
              <v-icon class="icon-time py-0"></v-icon
              >{{ computeTimeAgo(trendingInfo.meta.first_published_at) }}
            </v-col>
            <v-col class="text-truncate py-0" cols="5">
              <v-icon class="icon-user py-0"></v-icon>{{ trendingInfo.author }}
            </v-col>
            <v-col class="text-truncate py-0" cols="2">
              <v-icon class="icon-view py-0"></v-icon
              >{{ computeViews(trendingInfo.views) }}
            </v-col>
            <v-col class="text-truncate py-0" cols="2">
              <v-icon class="icon-comment py-0"></v-icon>{{ trendingInfo.comments }}
            </v-col>
          </v-row>
        </v-toolbar> -->
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "nz-trending",
  components: {},
  props: {
    trendingTitle: {
      type: String,
      default() {
        return "NO TITLE";
      },
    },
    trendingList: {
      type: Array,
      default() {
        return [];
      },
    },
    trendingName: {
      type: String,
      default() {
        return "news";
      },
    },
  },
  data() {
    return {
      url: "",
    };
  },
  mounted() {},
  methods: {
    computeTimeAgo(first_published_at) {
      const interval = new Date().getTime() - new Date(first_published_at).getTime();
      const days = Math.floor(interval / (24 * 3600 * 1000));
      if (days > 0) {
        return days + "d ago";
      }
      const hours = Math.floor(interval / (3600 * 1000));
      if (hours > 0) {
        return hours + "h ago";
      }
      const minutes = Math.floor(interval / (60 * 1000));
      if (minutes > 0) {
        return minutes + "m ago";
      }
    },
    computeViews(views) {
      if (views > 1000000) {
        return Math.floor(views / 1000000) + "M";
      }
      if (views > 1000) {
        return Math.floor(views / 1000) + "k";
      } else return views;
    },
    transHtml(html_url) {
      this.url = html_url.replace(this.trendingName, "#/" + this.trendingName);
    },
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.text-over2-hidden {
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
