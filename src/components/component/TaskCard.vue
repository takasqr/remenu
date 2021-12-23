<template>
  <v-card :disabled="disabled" rounded="xl" @click="goToTaskDetail()">
    <v-list dense>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-action>
            <v-btn color="white" elevation="0" @click.stop="completeTask()">
              <CompletedButton />
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="task.name"></v-list-item-title>
            <v-list-item-content v-text="task.id"></v-list-item-content>
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
    task: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      disabled: false
    }
  },
  methods: {
    ...mapActions('tasks', ['COMPLETE_TASK']),
    completeTask: function () {
      // タスクカードを非活性に
      this.disabled = true
      this.COMPLETE_TASK(this.task)
      // タスクカードを活性に
      this.disabled = false
    },
    goToTaskDetail: function() {
      this.$router.push({ path: `task/${this.task.id}` })
    }
  }
}
</script>
