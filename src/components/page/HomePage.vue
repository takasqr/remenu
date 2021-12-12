<template>
  <div>
    <NewTask />
    <TaskList />
  </div>
</template>

<script>
import NewTask from '@/components/component/NewTask.vue'
import TaskList from '@/components/component/TaskList.vue'

export default {
  components: {
    NewTask,
    TaskList
  }
}
</script>