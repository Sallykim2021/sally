<template>
  <div id="nz-shows">
    <v-container fluid class="pa-0 ma-2">
      <v-row no-gutters class="pa-0 ma-0">
        <!-- Main Section -->
        <v-col class="pa-0 ma-0" cols="12" sm="12" md="8" lg="9" xl="9">
          <v-row no-gutters class="ma-0 pa-0">
            <v-col
              class="pt-0 pl-0 pr-2 pb-2 ma-0"
              cols="12"
              sm="12"
              md="4"
              lg="3"
              xl="3"
              v-for="(showoption, index) in showClipList"
              :key="index"
            >
              <NZVideoClip :options="showoption" />
            </v-col>
          </v-row>
          <!-- Pagination -->
          <v-pagination
            cols="12"
            v-model="page"
            :length="15"
            :total-visible="7"
          ></v-pagination>
        </v-col>

        <!-- Sidebar Section -->
        <v-col class="py-0 pr-0 pl-0 ma-0" cols="12" sm="12" md="4" lg="3" xl="3">
          <NZShowsTimeLine />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import NZShowsTimeLine from "./NZShowsTimeLine.vue";
import NZVideoClip from "./NZVideoClip.vue";
export default {
  name: "nz-shows",
  components: {
    NZShowsTimeLine,
    NZVideoClip,
  },
  props: ["introduction", "msg"],
  data() {
    return {
      showClipList: [],
      page: 1,
    };
  },

  mounted() {
    this.getPages();
    // this.getAboutUsIntroduction();
  },

  methods: {
    getPages() {
      axios({
        method: "get",
        url: "/api/v2/pages/?fields=*&type=shows.ShowClipPage",
        auth: {
          username: "admin",
          password: "admin",
        },
      }).then((response) => (this.showClipList = response.data.items));
    },

    // getAboutUsIntroduction() {
    //   axios({
    //     method: "get",
    //     url: "/api/v2/pages/?type=home.AboutUSPage&fields=introduction",

    //   }).then((response) => {
    //       let data = response.data.items[0];
    //       this.introduction = data.introduction;
    //     }
    //   );
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
