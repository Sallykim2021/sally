<template>
  <v-container id="nz-news-index" fluid class="pa-0">
    <!-- News Index-->
    <v-card tile elevation="0" class="ma-0 align-stretch">
      <v-row class="pa-0 ma-0">
        <v-col cols="12" sm="12" md="3" lg="3" xl="2" class="pa-0 ma-0" justify="center">
          <v-img
            class="ma-0 pa-0"
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt="Man looking at item at a store"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
        <v-col cols="12" sm="12" md="9" lg="9" xl="10" class="pa-0 ma-0">
          <v-card-actions max-height="20" class="ma-0 pt-0 pl-2 pb-0 pr-2">
            <v-btn
              text
              x-small
              tile
              class="primary text-subtitle-2 text-uppercase font-weight-normal"
            >
              Category
            </v-btn>
          </v-card-actions>

          <v-card-title class="pa-2 text-h6">
            <div class="text-over2-hidden">
              <a :href="url" @click="transHtml(options.meta.html_url)">{{
                options.title
              }}</a>
            </div>
          </v-card-title>
          <v-card-text class="pa-2 text-subtitle-1">
            <div class="text-over2-hidden">
              {{ options.introduction }}
            </div>
          </v-card-text>
          <br/>
          <v-toolbar height="30" elevation="0" class="text-body-2 justify py-0">
            <v-row no-gutters>
              <v-col class="text-truncate py-0" cols="auto" sm="2">
                <v-icon class="icon-time py-0"></v-icon>{{ options.date }}
              </v-col>
              <v-col class="text-truncate py-0" cols="auto" sm="3">
                <v-icon class="icon-user py-0"></v-icon>{{ options.author }}
              </v-col>
              <v-col class="text-truncate py-0" cols="auto" sm="2">
                <v-icon class="icon-view py-0"></v-icon>{{ options.views }}
              </v-col>
              <v-col class="text-truncate py-0" cols="auto" sm="2">
                <v-icon class="icon-comment py-0"></v-icon>{{ options.comments }}
              </v-col>
            </v-row>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "nz-news-index",
  components: {},
  data() {
    return {
      url: "",
    };
  },
  props: {
    options: {
      type: Object,
      default() {
        return {
          author: "",
          title: "",
          introduction: "",
          views: "",
          comments: "",
          date: "",
          meta: {},
        };
      },
    },
  },
  mounted() {},
  methods: {
    transHtml(html_url) {
      this.url = html_url.replace("news", "#/news");
    },
  },
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

a {
  color: black;
  text-decoration:none;
}
a:hover {
  color: black;
  text-decoration:underline;
}
</style>
