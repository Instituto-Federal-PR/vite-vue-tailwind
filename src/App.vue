<script setup lang="ts">
  import TaskForm from './components/TaskForm.vue';
  import TaskTable from './components/TaskTable.vue';
</script>

<template>
  <main class="min-h-screen bg-slate-50 p-8">
    <div class="max-w-4xl mx-auto">
      <header class="mb-8">
        <h1 class="text-3xl font-bold text-slate-800">Gerenciador de Atividades</h1>
      </header>
      <TaskForm />
      <TaskTable />
    </div>
  </main>
</template>