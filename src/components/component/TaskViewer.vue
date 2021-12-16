<template>
  <ul>
    <li>{{ task.name }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>