<template>
  <div>
    <button class="fetch-tasks-btn" @click="fetchTasks">ToDo Aufgaben abrufen</button>
    <ul v-if="tasks && tasks.length">
      <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: null
    };
  },
  methods: {
    fetchTasks() {
      fetch('http://localhost:8080/api/tasks')
          .then(response => response.json())
          .then(data => {
            this.tasks = data;
          })
          .catch(error => console.error('Fehler beim Abrufen der Aufgaben:', error));
    }
  }
};
</script>
