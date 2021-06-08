<template>
  <div id="nz-blog">
    <div class="container flex flex-wrap py-6 mx-auto">
      <!-- Main Section -->
      <section class="flex flex-col items-center w-full px-3 md:w-2/3">
        <article class="flex flex-col my-4 shadow">
          <!-- Article Image -->
          <a href="#" class="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
          </a>
          <div class="flex flex-col justify-start p-6 bg-white">
            <a href="#" class="pb-4 text-sm font-bold text-blue-700 uppercase"
              >Technology</a
            >
            <a href="#" class="pb-4 text-3xl font-bold hover:text-gray-700"
              >Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a
            >
            <p href="#" class="pb-3 text-sm">
              By
              <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>,
              Published on April 25th, 2020
            </p>
            <a href="#" class="pb-6"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
              dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta
              volutpat. In sit amet posuere magna..</a
            >
            <a href="#" class="text-gray-800 uppercase hover:text-black"
              >Continue Reading <i class="fas fa-arrow-right"></i
            ></a>
          </div>
        </article>

        <article class="flex flex-col my-4 shadow">
          <!-- Article Image -->
          <a href="#" class="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" />
          </a>
          <div class="flex flex-col justify-start p-6 bg-white">
            <a href="#" class="pb-4 text-sm font-bold text-blue-700 uppercase"
              >Automotive, Finance</a
            >
            <a href="#" class="pb-4 text-3xl font-bold hover:text-gray-700"
              >Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a
            >
            <p href="#" class="pb-3 text-sm">
              By
              <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>,
              Published on January 12th, 2020
            </p>
            <a href="#" class="pb-6"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
              dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta
              volutpat. In sit amet posuere magna..</a
            >
            <a href="#" class="text-gray-800 uppercase hover:text-black"
              >Continue Reading <i class="fas fa-arrow-right"></i
            ></a>
          </div>
        </article>

        <article class="flex flex-col my-4 shadow">
          <!-- Article Image -->
          <a href="#" class="hover:opacity-75">
            <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" />
          </a>
          <div class="flex flex-col justify-start p-6 bg-white">
            <a href="#" class="pb-4 text-sm font-bold text-blue-700 uppercase">Sports</a>
            <a href="#" class="pb-4 text-3xl font-bold hover:text-gray-700"
              >Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</a
            >
            <p href="#" class="pb-3 text-sm">
              By
              <a href="#" class="font-semibold hover:text-gray-800">David Grzyb</a>,
              Published on October 22nd, 2019
            </p>
            <a href="#" class="pb-6"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis porta
              dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis iaculis dui porta
              volutpat. In sit amet posuere magna..</a
            >
            <a href="#" class="text-gray-800 uppercase hover:text-black"
              >Continue Reading <i class="fas fa-arrow-right"></i
            ></a>
          </div>
        </article>

        <!-- Pagination -->
        <div class="flex items-center py-8">
          <a
            href="#"
            class="flex items-center justify-center w-10 h-10 text-sm font-semibold text-white bg-blue-800 hover:bg-blue-600"
            >1</a
          >
          <a
            href="#"
            class="flex items-center justify-center w-10 h-10 text-sm font-semibold text-gray-800 hover:bg-blue-600 hover:text-white"
            >2</a
          >
          <a
            href="#"
            class="flex items-center justify-center w-10 h-10 ml-3 text-sm font-semibold text-gray-800 hover:text-gray-900"
            >Next <i class="ml-2 fas fa-arrow-right"></i
          ></a>
        </div>
      </section>

      <!-- Sidebar Section -->
      <aside class="flex flex-col items-center w-full px-3 md:w-1/3">
        <NZShowsTimeLine />
        <div class="flex flex-col w-full p-6 my-4 bg-white shadow">
          <p class="pb-5 text-xl font-semibold">关于我们</p>
          <p class="pb-2">
            {{ introduction }}
          </p>
          <a
            href="/about-us"
            class="flex items-center justify-center w-full px-2 py-3 mt-4 text-sm font-bold text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
          >
            Get to know us
          </a>
        </div>

        <div class="flex flex-col w-full p-6 my-4 bg-white shadow">
          <p class="pb-5 text-xl font-semibold">农场风光</p>
          <div class="grid grid-cols-3 gap-3">
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=1"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=2"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=3"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=4"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=5"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=6"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=7"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=8"
            />
            <img
              class="hover:opacity-75"
              src="https://source.unsplash.com/collection/1346951/150x150?sig=9"
            />
          </div>
          <a
            href="#"
            class="flex items-center justify-center w-full px-2 py-3 mt-6 text-sm font-bold text-white uppercase bg-blue-800 rounded hover:bg-blue-700"
          >
            <i class="mr-2 fab fa-instagram"></i> Follow @Oasis
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import NZShowsTimeLine from "./NZShowsTimeLine.vue";
export default {
  name: "nz-blog",
  components: {
    NZShowsTimeLine,
  },
  props: ["msg"],

  data() {
    return {
      introduction: "",
    };
  },

  mounted() {
    this.getAboutUsIntroduction();
  },

  methods: {
    getAboutUsIntroduction() {
      axios({
        method: "get",
        url: "/api/v2/pages/?type=home.AboutUSPage&fields=introduction",
      }).then((response) => {
        let data = response.data.items[0];
        if (data) {
          this.introduction = data.introduction;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
