<template>
  <div id="nz-reset-complete" class="d-flex justify-center align-center">
    <v-container class="my-15">
      <v-card class="mx-auto text-center pa-5 text-body-2" :width="this.cardWidth" outlined>
        <h2 class="text-left mb-2">Password reset complete</h2>
        <v-divider></v-divider>

        <v-img
          class="mx-auto my-8"
          color="primary"
          max-width="70"
          max-height="70"
          contain
          src="/static/img/check.png"
        >
        </v-img>

        <p class="grey--text text-caption">please sign in again</p>

        <v-btn
          type="submit"
          color="primary"
          class="white--text text-body-2"
          width="100%"
          to="/accounts/login"
        >
          Sign in
        </v-btn>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nz-reset-complete",

  data() {
    return {};
  },
  computed: {
    cardWidth() {
      const { xs, sm } = this.$vuetify.breakpoint;
      if (xs) {
        return "85%";
      } else if (sm) {
        return "50%";
      } else {
        return "40%";
      }
    },
  },

  created() {},
  mounted() {},

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nz-reset-complete {
  background: url("/static/img/bg.jpg") center center no-repeat;
}
</style>
