<template>
  <div>
    <NewHabit />
    <HabitList />
  </div>
</template>

<script>
import NewHabit from '@/components/component/NewHabit.vue'
import HabitList from '@/components/component/HabitList.vue'

export default {
  components: {
    NewHabit,
    HabitList
  }
}
</script>