<template>
  <v-card rounded="xl">
    <v-list dense>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-action>
            <v-btn color="white" elevation="0" @click="completeTask()">
              <CompletedButton />
            </v-btn>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="task.name"></v-list-item-title>
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
  methods: {
    ...mapActions('tasks', ['COMPLETE_TASK']),
    completeTask: function () {
      this.COMPLETE_TASK(this.task.id)
      
    }
  }
}
</script>
