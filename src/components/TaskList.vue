<template>
  <div class="task-list">
    <task-component v-for="task in tasks" :key="task" :title="task" />
  </div>
</template>

<script>
import TaskComponent from './TaskComponent.vue';

export default {
  components: {
    TaskComponent
  },
  data() {
    return {
      tasks: []
    };
  }
}
</script>
