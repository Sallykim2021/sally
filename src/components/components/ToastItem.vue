<template lang="pug">
  div(class="w-full px-2 py-4 overflow-x-auto text-center whitespace-no-wrap rounded-md" role="alert")
    div(
      class="relative inline-flex w-full max-w-sm ml-3 overflow-hidden rounded shadow-sm hover:shadow-lg"
      :class="bgColorClass"
    )
      div(class="flex items-center justify-center w-12")
        svg(
          class="w-10 h-10 text-white" xmlns="http://www.w3.org/2000/svg"
          fill="none" viewBox="0 0 20 24" stroke="currentColor"
        )
          path(
            v-if="item.type === 'success'"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
          )
          path(
            v-if="item.type === 'info'"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          )
          path(
            v-if="item.type === 'warning'"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          )
          path(
            v-if="item.type === 'error'"
            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          )

      div(class="px-3 py-2 text-left")
        span(class="font-semibold text-white") {{ item.title }}
        p(class="mb-1 text-sm leading-none text-white") {{ item.text }}

      div(class="absolute right-0 p-1")
        svg(
          class="w-6 h-6 text-white fill-current" role="button" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20" @click="item.close"
        )
          path(d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z")
</template>

<script>
export default {
  props: [ 'item' ],
  components: {

  },
  data () {
    return {
      colors: {
        'success': 'green',
        'info': 'blue',
        'warning': 'yellow',
        'error': 'red',
      }
    }
  },
  computed: {
    bgColorClass () {
      const vm = this
      const result = {}
      const color = vm.colors[vm.item.type]
      result['bg-' + color + '-500'] = true
      result['hover:bg-' + color + '-600'] = true
      return result
    },
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>