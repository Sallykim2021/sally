<template>
  <div id="nz-topic-nav">
    <!-- Topic Nav -->
    <nav class="w-full py-1 bg-gray-100 border-t border-b" x-data="{ open: false }">
      <div class="block sm:hidden">
        <a
          href="#"
          class="flex items-center justify-center block text-base font-bold text-center uppercase md:hidden"
          @click="open = !open"
        >
          Topics
          <i :class="open ? 'icon-arrow-down' : 'icon-arrow-up'" class="ml-2 fas"></i>
        </a>
      </div>
      <div
        :class="open ? 'block' : 'hidden'"
        class="flex-grow w-full sm:flex sm:items-center sm:w-auto"
      >
        <div
          class="container flex flex-col items-center justify-center w-full px-6 py-2 mx-auto mt-0 text-sm uppercase sm:flex-row"
        >
          <a href="#" class="px-4 py-2 mx-2 rounded hover:bg-gray-400">Miles Guo</a>
          <a href="#" class="px-4 py-2 mx-2 rounded hover:bg-gray-400">CCP Virus</a>
          <a href="#" class="px-4 py-2 mx-2 rounded hover:bg-gray-400">China Insight</a>
          <a href="#" class="px-4 py-2 mx-2 rounded hover:bg-gray-400">Global</a>
          <a href="#" class="px-4 py-2 mx-2 rounded hover:bg-gray-400">NZ Local</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nz-topic-nav",
  props: ["introduction", "msg"],
  data() {
    return {
      open: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
