<template>
  <div id="nz-reset-password" class="d-flex justify-center align-center">
    <v-container class="my-5">
      <v-card class="mx-auto text-center pa-5 text-body-2" :width="this.cardWidth" outlined>
        <h2 class="text-left mb-2">Forget your password?</h2>
        <v-divider></v-divider>
        <v-alert
          v-model="alert"
          class="my-5"
          close-text="Close Alert"
          dense
          outlined
          type="error"
          dismissible
        >
          {{ message }}
        </v-alert>
        <v-form class="mt-5" ref="form">
          <p class="text-left grey--text text-caption my-5">
            Enter your email below and we will send you a email to reset your
            password
          </p>
          <h4 class="text-left">E-mail</h4>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            @focus="closeAlert"
            single-line
            outlined
            required
          ></v-text-field>
          <v-btn
            color="primary"
            class="white--text text-body-2"
            width="100%"
            @click="submit"
          >
            Reset my password
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nz-reset-password",

  data() {
    return {
      alert: false,
      message: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
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
  mounted() {
    this.email = "";
  },

  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return false;
      }

      this.$http
        .post("/en/dj-rest-auth/password/reset/", {
          email: this.email,
        })
        .then((response) => {
          console.log(response);
          location.hash = "/password-reset/done";
        })
        .catch((error) => {
          this.message = "邮箱不存在!请确保邮箱正确!";
          this.alert = true;

          console.log(error);
        });
    },
    closeAlert() {
      this.alert = false;
      this.message = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nz-reset-password {
  background: url("/static/img/bg.jpg") center center no-repeat;
}
</style>
