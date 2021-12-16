<template>
  <div>
    <TaskViewer :taskId="$route.params['taskId']" />
    <TaskEditor :taskId="$route.params['taskId']" />
  </div>
</template>

<script>
import TaskViewer from '@/components/component/TaskViewer'
import TaskEditor from '@/components/component/TaskEditor'
export default {
  components: {
    TaskViewer,
    TaskEditor
  },
  created () {
    // console.log(this.$route.params['taskId'])
  }
}
</script>
