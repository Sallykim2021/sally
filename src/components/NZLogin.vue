<template>
  <div id="nz-login" class="d-flex justify-center align-center">
    <v-container class="my-5">
      <v-card class="mx-auto text-center pa-5 text-body-2" :width="this.cardWidth" outlined>
        <h2 class="text-left mb-2">Sign In</h2>
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
          <!-- <h4 class="text-left">UserName</h4>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            single-line
            outlined
            required
          ></v-text-field> -->

          <h4 class="text-left">E-mail</h4>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            @focus="closeAlert"
            single-line
            outlined
            required
          ></v-text-field>

          <h4 class="text-left">Password</h4>
          <v-text-field
            v-model="password"
            :rules="pwdRules"
            @focus="closeAlert"
            type="password"
            single-line
            outlined
            required
          ></v-text-field>

          <p class="text-right grey--text text-caption ">
            <router-link class="text-decoration-none" to="/accounts/reset">
              forget password?</router-link
            >
          </p>
          <v-btn
            color="primary"
            class="white--text text-body-2"
            width="100%"
            @click="submit"
          >
            Sign In
          </v-btn>
        </v-form>
        <v-divider class="my-5 "></v-divider>
        <p class="mt-8 grey--text text-caption">
          Need an account?
          <router-link class="ml-2 text-decoration-none" to="/accounts/signup">
            Sign up</router-link
          >
        </p>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nz-login",

  data() {
    return {
      alert: false,
      message: "",
      username: "",
      email: "",
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      pwdRules: [
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
    this.username = this.email = this.password = "";
  },

  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return false;
      }

      this.$http
        .post("/en/dj-rest-auth/login/ ", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.key) {
            location.href = "/";
          } else {
            this.message = "登录失败!请确保登录信息正确!";
            this.alert = true;
          }
        })
        .catch((error) => {
          this.message = "登录失败!请确保登录信息正确!";
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
#nz-login {
  background: url("/static/img/bg.jpg") center center no-repeat;
}
</style>
