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
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    TaskCard
  },
  created: function () {
    // if (this.user && (Object.keys(this.tasks).length === 0)) {
    if (this.user) {
      this.FETCH_TASKS(this.user.uid)
    }
  },
  computed: {
    ...mapState('tasks',
      { tasks: state => state.tasks }
    ),
    ...mapState('user',
      { user: state => state.user }
    )
  },
  methods: {
    ...mapActions('tasks', ['FETCH_TASKS'])
  },
  watch: {
    user (newValue, oldValue) {
      if (newValue && !oldValue) {
        this.FETCH_TASKS(this.user.uid)
      }
    }
  }
}
</script>
