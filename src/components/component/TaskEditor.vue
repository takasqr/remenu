<template>
  <div>
    <div>task editor</div>
    <InputTaskName v-bind:taskName.sync="task.name"></InputTaskName>
  </div>
</template>

<script>
import InputTaskName from '@/components/basic/InputTaskName.vue'
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  components: {
    InputTaskName
  }
}
</script>