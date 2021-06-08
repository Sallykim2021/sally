<template>
  <v-app-bar
    id="nz-top-nav"
    app
    flat
    dark
    dense
    height="56px"
    style="background: linear-gradient(to right, #0d408b, #832547)"
  >
    <v-container fluid class="pa-0 mx-n4 fill-height">
      <!-- <v-navigation-drawer v-model="sidebar" app>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.title" :to="item.path">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>{{ item.title }}</v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer> -->
      <!-- <v-app-bar-nav-icon @click="sidebar = !sidebar"> -->
      <v-app-bar-nav-icon>
        <v-icon> icon-menu </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="(item, index) in menuItems" :key="index" :to="item.path">
          <!-- <v-icon left dark>{{ item.icon }}</v-icon> -->
          {{ item.title }}
        </v-btn>

        <v-btn
          icon
          :href="socialMedia.gtv"
          target="_blank"
          class="ml-10"
          v-if="socialMedia.gtv"
        >
          <v-icon>icon-gtv</v-icon>
        </v-btn>

        <v-btn
          icon
          :href="socialMedia.gnews"
          target="_blank"
          class="ml-12"
          v-if="socialMedia.gnews"
        >
          <v-icon>icon-gnews</v-icon>
        </v-btn>

        <!-- <v-btn
          icon
          :href="socialMedia.lowfund"
          target="_blank"
          class="ml-8"
          v-if="socialMedia.lowfund"
        >
          <v-img
            color="primary"
            max-width="60"
            max-height="30"
            contain
            src="/static/img/rolfundlogo.png"
          ></v-img>
        </v-btn> -->
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-btn
        icon
        class="hidden-xs-only hidden-sm-only"
        :href="socialMedia.twitter"
        target="_blank"
        v-if="socialMedia.twitter"
      >
        <v-icon>icon-twitter</v-icon>
      </v-btn>

      <v-btn
        icon
        class="hidden-xs-only hidden-sm-only"
        :href="socialMedia.facebook"
        target="_blank"
        v-if="socialMedia.facebook"
      >
        <v-icon>icon-fb</v-icon>
      </v-btn>

      <v-btn
        icon
        class="hidden-xs-only hidden-sm-only"
        :href="socialMedia.Instagram"
        target="_blank"
        v-if="socialMedia.Instagram"
      >
        <v-icon>icon-ins</v-icon>
      </v-btn>

      <v-btn
        icon
        class="hidden-xs-only hidden-sm-only"
        :href="socialMedia.youtube"
        target="_blank"
        v-if="socialMedia.youtube"
      >
        <v-icon>icon-youtube</v-icon>
      </v-btn>

      <router-link
        text
        small
        class="text-decoration-none text-body-2 mr-2 white--text"
        to="/"
        v-if="this.username"
      >
        {{ this.username }}
      </router-link>
      <v-btn
        text
        small
        class="hidden-xs-only hidden-sm-only"
        to="/"
        @click="logout"
        v-if="this.username"
      >
        LogOut?</v-btn
      >
      <v-btn
        text
        small
        class="hidden-xs-only hidden-sm-only"
        to="/accounts/login"
        v-if="!this.username"
      >
        LogIn
      </v-btn>
      <v-btn
        text
        small
        class="hidden-xs-only hidden-sm-only"
        to="/accounts/signup"
        v-if="!this.username"
      >
        SignUp</v-btn
      >
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: "nz-top-nav",
  components: {},
  props: ["nzheadertitle", "nzheaderdescription", "inHome"],
  data() {
    return {
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/", icon: "icon-user" },
        { title: "News", path: "/news", icon: "icon-search" },
        { title: "Shows", path: "/shows", icon: "icon-menu" },
        { title: "Videos", path: "/videos", icon: "icon-menu" },
      ],
      socialMedia: {},
      username: "",
      email: "",
    };
  },
  computed: {
    logoSize: function () {
      let logosize = "w-24";
      if (this.inHome === "true") {
        logosize = "w-60";
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
  created() {
    this.getSocialMediaSetting();
    this.getUserInfo();
  },
  mounted() {
  },
  methods: {
    getSocialMediaSetting() {
      this.$http.get("/api/settings/social-media/").then((response) => {
        this.socialMedia = response.data;
        this.socialMedia.twitter =
          this.socialMedia.twitter || "https://twitter.com/edendomain";
        this.socialMedia.youtube = this.socialMedia.youtube || "https://youtube.com";
        this.socialMedia.facebook = this.socialMedia.facebook || "https://facebook.com";
        this.socialMedia.Instagram =
          this.socialMedia.Instagram || "https://instagram.com";
        this.socialMedia.gnews = this.socialMedia.gnews || "https://gnews.org/";
        this.socialMedia.gtv = this.socialMedia.gtv || "https://gtv.org/";
        this.socialMedia.lowfund =
          this.socialMedia.lowfund || "https://rolfoundation.org/";
      });
    },
    getUserInfo() {
      this.$http.get("/api/get-user-info/").then((response) => {
        this.username = response.data.username;
        this.email = response.data.email;
      });
    },
    logout() {
      this.$http
        .post("/en/dj-rest-auth/logout/")
        .then((response) => {
          console.log(response.data);
          location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
