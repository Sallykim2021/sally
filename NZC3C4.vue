<template>
  <v-container id="nz-c3c4" fluid class="ma-0 d-flex">
    <v-row dense cols="12" class="mt-n1" >
      <v-col cols="6" >
        <v-card  dark elevation="0" tile fill-height class="mx-auto" style="background: linear-gradient(to bottom, #6d345d, #4b3566)" >
         <v-layout column align-center class="pt-4" > 
          <v-img src="/static/img/c3.png" ></v-img>
         </v-layout>
        <v-layout column align-center class="pt-2">
          <v-card-title class="ma-0 py-2 px-0 text-caption">
          Rule of Law Foundation (C3)
          </v-card-title>
        </v-layout>
        <v-layout column align-center class="mt-2 mb-3">
         <v-btn
         elevation="2"
          small
          class="text-h6 white black--text text-caption mx-4 mb-5 "
          href="https://rolfoundation.org/"
          target="_blank"
         > Button
        </v-btn>
        </v-layout>
       </v-card>
     </v-col>
    
    <v-col cols="6" >
     <v-card  dark elevation="0" tile fill-height  class="mx-auto" style="background: linear-gradient(to bottom, #6d345d, #4b3566)">
       <v-layout column align-center class="pt-4"> 
         <v-img src="/static/img/c4.png" ></v-img>
       </v-layout>
       <v-layout column align-center class="pt-2">
      <v-card-title class="ma-0 py-2 px-0 text-caption">
        Rule of Law Society (C4)
      </v-card-title>
       </v-layout>
      <v-layout column align-center class="mt-2 mb-3">
        <v-btn
         elevation="2"
          small
          class="text-h6 white black--text text-caption mx-4 mb-5"
          href="https://rolsociety.org/"
          target="_blank"
         >Button
        </v-btn>
      </v-layout>
     </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  name: "nz-c3c4",
  components: {},
  props: {
    trendingTitle: {
      type: String,
      default() {
        return "NO TITLE";
      },
    },
    newsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      news: {
        type: Object,
        default() {
          return {
            author: "",
            title: "",
            article_url: "",
            views: "",
            comments: "",
            date: "",
          };
        },
      },
    };
  },
  mounted() {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headerClass {
  white-space: nowrap;
  word-break: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* .gradient {
  width: 230px;
  height: 230px;
  background: -webkit-linear-gradient(bottom,#6d345d,#4b3566) no-repeat;
  text-align: center;
} */

</style>
