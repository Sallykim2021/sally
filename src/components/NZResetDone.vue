<template>
  <div id="nz-reset-done" class="d-flex justify-center align-center">
    <v-container class="my-15">
      <v-card
        class="mx-auto text-center pa-5 text-body-2"
        :width="this.cardWidth"
        outlined
      >
        <h2 class="text-left mb-2">Send email</h2>
        <v-divider></v-divider>

        <v-img
          class="mx-auto my-8"
          color="primary"
          max-width="70"
          max-height="70"
          contain
          src="/static/img/email.png"
        >
        </v-img>

        <p class="grey--text text-caption">
          An email has been sent.please check it out
        </p>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nz-reset-done",

  data() {
    return {
      token: "",
    };
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
#nz-reset-done {
  background: url("/static/img/bg.jpg") center center no-repeat;
}
</style>
