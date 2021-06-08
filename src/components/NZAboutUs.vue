<template>
  <div id="nz-aboutUs">
    <v-container class="white my-5">
      <h3>{{ title }}</h3>
      <v-divider class="mt-1"></v-divider>
      <v-img
        :lazy-src="banner.url"
        height="100%"
        width="100%"
        :src="banner.url"
        v-if="banner"
      ></v-img>

      <v-row no-gutters v-for="(item, index) in contentBlocks" :key="index">
        <v-col cols="12" :sm="4" :md="3">
          <v-card
            class="px-4 py-1 font-weight-bold fill-height text-body-2"
            flat
          >
            {{ item.value.title }}
          </v-card>
        </v-col>
        <v-col cols="12" :sm="8" :md="9">
          <v-card class="px-4 py-1 text-body-2" flat v-html="item.value.content"> </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nz-aboutUs",

  data() {
    return {
      title: "",
      banner: {},
      contentBlocks: {},
    };
  },
  computed: {},

  mounted() {
    this.getAboutUS();
  },

  methods: {
    getAboutUS() {
      this.$http
        .get("/api/v2/pages/?type=home.AboutUSPage&fields=*")
        .then((response) => {
          let data = response.data.items[0];
          this.title = data.title;
          this.banner = data.banner;
          this.contentBlocks = data.content;
          console.log(this.contentBlocks);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
