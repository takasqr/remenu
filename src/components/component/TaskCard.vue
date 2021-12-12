<template>
  <v-card rounded="xl">
    <v-list dense>
      <v-list-item-group>
        <v-list-item>
          <CompletedButton />
          <v-list-item-content>
            <v-list-item-title v-text="task.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
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
  }
}
</script>
