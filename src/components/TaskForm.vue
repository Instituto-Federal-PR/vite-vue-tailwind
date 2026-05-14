<script setup lang="ts">
  import { reactive } from 'vue';
  import { useTasks } from '../composables/useTasks';

  const { addTask } = useTasks();

  // reactive: torna todas as três propriedades reativas (name,type date)
  const form = reactive({
    name: '',
    type: '',
    date: ''
  });

  const submit = () => {
    if (form.name && form.type && form.date) {
      addTask({
        ...form,
        id: crypto.randomUUID()
      });
      // Resetar formulário
      form.name = '';
      form.type = '';
      form.date = '';
    }
  };
</script>

<template>
  <form @submit.prevent="submit" class="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input v-model="form.name" placeholder="Nome da atividade" class="border p-2 rounded w-full" required />
      
      <select v-model="form.type" class="border p-2 rounded w-full" required>
        <option value="" disabled>Selecione o tipo</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Estudo">Estudo</option>
        <option value="Lazer">Lazer</option>
      </select>

      <input type="date" v-model="form.date" class="border p-2 rounded w-full" required />
    </div>
    
    <button type="submit" class="mt-4 bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700">
      Cadastrar Atividade
    </button>
  </form>
</template>