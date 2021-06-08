<template lang="pug">
  vue-notification-renderless.notification--wrapper
    div(slot-scope="{ items }")
      transition-group(name="notification")
        toast-item(v-for="item in items" :item="item" :key="item.id")
</template>

<script>
import ToastItem from './ToastItem.vue'

export default {
  props: {
    reverse: { type: Boolean, default: false },
    duration: { type: [Number, String], default: 1000 },
    messages: { type: String, default: '' },
    title: { type: String, default: '' },
    type: { type: String, default: 'info' },
  },
  components: {
    ToastItem
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    const vm = this
    try {
      const messages = JSON.parse(atob(vm.messages))
      Object.keys(messages).forEach(k => {
        messages[k].forEach(m => {
          vm.$notification({
            type: vm.type,
            title: vm.title,
            text: m,
            duration: vm.duration,
            reverse: vm.reverse
          })
        })
      })
    } catch {
      // ignore parse error
    }
  },
}
</script>

<style scoped>
.notification--wrapper {
  position: fixed;
  margin: 20px;
  bottom: 0;
  right: 0;
  width: 50%;
  max-width: 650px;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.5s;
}

.notification-enter,
.notification-leave-to {
  opacity: 0;
  transform: translateX(60px);
}

.notification-move {
  transition: transform 0.2s;
}
</style>