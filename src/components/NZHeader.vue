<template>
  <v-container
    id="nz-header"
    fluid
    fill-height
    class="pa-0"
    dark
    style="background: linear-gradient(to right, #0b3676, #8f3455)"
  >
    <v-col cols="2" xl="2" lg="3" md="4" sm="6" xs="12" color="red">
      <img alt="avatar" v-bind:width="logoSize" src="/static/img/nzvlogo.svg" />
      <p v-show="showTitle" class="text-uppercase text-h3 ma-0">
        {{ nzheadertitle }}
      </p>
    </v-col>
    <v-col cols="10" xl="10" lg="9" md="8" class="text-h6 hidden-sm-only hidden-xs-only">
      <v-banner dark>
        {{ nzheaderdescription }}
        <!-- <template v-slot:actions>
          <v-btn text> Dismiss </v-btn>
          <v-btn text> Retry </v-btn>
        </template> -->
      </v-banner>
    </v-col>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  name: "nz-header",
  components: {},
  props: ["nzheadertitle", "nzheaderdescription", "inHome"],
  data() {
    return {};
  },
  computed: {
    logoSize: function () {
      let logosize = "90px";
      if (this.inHome === "true") {
        logosize = "260px";
      }
      return logosize;
    },
    showTitle: function () {
      let showtitle = true;
      if (this.inHome === "true") {
        showtitle = false;
      }
      return showtitle;
    },
  },
  created() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
