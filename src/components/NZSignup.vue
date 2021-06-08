<template>
  <div id="nz-signup" class="d-flex justify-center align-center">
    <v-container class="my-5">
      <v-card class="mx-auto text-center pa-5 text-body-2" :width="this.cardWidth" outlined>
        <h2 class="text-left mb-2">Sign Up</h2>
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
          <h4 class="text-left">UserName</h4>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            @focus="closeAlert"
            single-line
            outlined
            required
          ></v-text-field>

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

          <h4 class="text-left">Confirm Password</h4>
          <v-text-field
            v-model="password2"
            :rules="pwd2Rules"
            @focus="closeAlert"
            type="password"
            single-line
            outlined
            required
          ></v-text-field>

          <p class="grey--text text-caption">
            Agree with NZvoice
            <router-link
              class="ml-2 text-decoration-none"
              to="/terms-conditions"
            >
              Terms & Conditions</router-link
            >
            And
            <router-link class="ml-2 text-decoration-none" to="/privacy-policy">
              Privacy Policy</router-link
            >
          </p>
          <v-btn
            color="primary"
            class="white--text text-body-2 "
            width="100%"
            @click="submit"
          >
            Sign Up
          </v-btn>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "nz-signup",

  data() {
    return {
      alert: false,
      message: "",
      valid: true,
      username: "",
      usernameRules: [
        (v) => !!v || "UserName is required",
        (v) =>
          /^[a-zA-Z]\w{4,19}$/.test(v) ||
          "UserName start:[a-zA-Z],length:5~20,allow:[_a-zA-Z0-9]",
      ],
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
      password2: "",
      pwd2Rules: [
        (v) => !!v || "Confirm password is required",
        (v) =>
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
            v
          ) ||
          "Password at least 8 characters, at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character",
        (v) =>
          v === this.password ||
          "Confirm Password must be the same as Password",
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
    this.username = this.email = this.password = this.password2 = "";
  },

  methods: {
    checkIfUserExist() {
      if (!this.username && !this.email) {
        return false;
      }
    },
    submit() {
      if (!this.$refs.form.validate()) {
        return false;
      }

      //首先验证用户名和邮箱是否已经存在
      this.$http
        .get("/api/check-if-user-exist/", {
          username: this.username,
          email: this.email,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data.code) {
            this.message = response.data.message;
            this.alert = true;
          } else {
            this.$http
              .post("/en/dj-rest-auth/registration/", {
                username: this.username,
                email: this.email,
                password1: this.password,
                password2: this.password2,
              })
              .then((response) => {
                if (response.data.key) {
                  window.location.href = "/";
                } else {
                  this.message = "注册失败!请稍后重试!";
                  this.alert = true;
                }
              })
              .catch((error) => {
                this.message =
                  "页面停留超时,请刷新后重试!";
                this.alert = true;

                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
          this.message = "检查用户名或邮箱失败,请稍后重试!";
          this.alert = true;
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
#nz-signup {
  background: url("/static/img/bg.jpg") center center no-repeat;
}
</style>
