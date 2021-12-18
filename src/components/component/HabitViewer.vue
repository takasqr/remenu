<template>
  <ul>
    <li>{{ habit.name }}</li>
  </ul>
</template>

<script>
export default {
  props: {
    habit: {
      type: Object,
      required: true
    }
  }
}
</script>