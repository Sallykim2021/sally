<template>
  <div id="nz-privacy">
    <v-container class="white my-5">
      <h3>{{ title }}</h3>
      <v-divider class="mt-1 mb-4"></v-divider>
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
  name: "nz-privacy",

  data() {
    return {
      title: "",
      contentBlocks: {},
    };
  },
  computed: {},
  mounted() {
    this.getPrivacy();
  },

  methods: {
    getPrivacy() {
      this.$http
        .get("/api/v2/pages/?type=home.PrivacyPage&fields=*")
        .then((response) => {
          let data = response.data.items[0];
          this.title = data.title;
          this.contentBlocks = data.privacytext;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
