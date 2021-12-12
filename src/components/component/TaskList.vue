<template>
  <div>
    <TaskCard
      v-for="(task, index) in tasks"
      :key="index"
      :task="task"
    />
  </div>
</template>

<script>
import TaskCard from '@/components/component/TaskCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    TaskCard
  },
  computed: {
    ...mapState('tasks',
      { tasks: state => state.tasks }
    )
  }
}
</script>
