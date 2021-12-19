<template>
  <v-card rounded="xl" @click="goToHabitDetail()">
    <v-list dense>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-action>
            <v-btn color="white" elevation="0" @click.stop="completeHabit()">
              <CompletedButton />
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="habit.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import CompletedButton from '@/components/basic/CompletedButton.vue'

export default {
  components: {
    CompletedButton
  },
  props: {
    habit: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions('habits', ['DELETE_HABIT']),
    completeHabit: function () {
      this.DELETE_HABIT(this.habit)
    },
    goToHabitDetail: function() {
      this.$router.push({ path: `habit/${this.habit.id}` })
    }
  }
}
</script>
