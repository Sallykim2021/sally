<template>
  <div id="nz-reset-confirm" class="d-flex justify-center align-center">
    <v-container class="my-5">
      <v-card class="mx-auto text-center pa-5 text-body-2" :width="this.cardWidth" outlined>
        <h2 class="text-left mb-2">Reset password</h2>
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
          <h4 class="text-left">New password</h4>
          <v-text-field
            type="password"
            v-model="password"
            :rules="pwdRules"
            @focus="closeAlert"
            single-line
            outlined
            required
          ></v-text-field>

          <h4 class="text-left">Confirm new password</h4>
          <v-text-field
            type="password"
            v-model="password2"
            :rules="pwd2Rules"
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
            Confirm
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nz-reset-confirm",

  data() {
    return {
      alert: false,
      message: "",
      token: "",
      uid: "",
      password: "",
      pwdRules: [
        (v) => !!v || "Password is required",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            v
          ) ||
          "Password at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
      ],
      password2: "",
      pwd2Rules: [
        (v) => !!v || "Password is required",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            v
          ) ||
          "Password at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
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
    this.uid = this.$route.params.uid;
    this.token = this.$route.params.token;
    this.password = this.password2 = "";
  },

  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return false;
      }

      this.$http
        .post("/en/dj-rest-auth/password/reset/confirm/", {
          uid: this.uid,
          token: this.token,
          new_password1: this.password,
          new_password2: this.password2,
        })
        .then((response) => {
          if (response.status === 200 && response.statusText === "OK") {
            location.hash = "/password-reset-complete";
          } else {
            this.message = "密码重置失败!请稍后重试!";
            this.alert = true;
          }
        })
        .catch((error) => {
          console.log(error);
          this.message = "密码重置链接失效!请重新重置密码!";
          this.alert = true;
        });
    },

    closeAlert() {
      this.alert = false;
      this.message = ""
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nz-reset-confirm {
  background: url("/static/img/bg.jpg") center center no-repeat;
}
</style>
