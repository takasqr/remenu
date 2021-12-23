<template>
  <div>
    <HabitCard
      v-for="(habit, index) in habits"
      :key="index"
      :habit="habit"
    />
  </div>
</template>

<script>
import HabitCard from '@/components/component/HabitCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    HabitCard
  },
  created: function () {
    if (this.user) {
      this.FETCH_HABITS(this.user.uid)
    }
  },
  computed: {
    ...mapState('habits',
      { habits: state => state.habits }
    ),
    ...mapState('user',
      { user: state => state.user }
    )
  },
  methods: {
    ...mapActions('habits', ['FETCH_HABITS'])
  },
  watch: {
    user (newValue, oldValue) {
      if (newValue && !oldValue) {
        this.FETCH_HABITS(this.user.uid)
      }
    }
  }
}
</script>
