<script setup lang="ts">
    import { useTasks } from '../composables/useTasks';
    const { tasks, removeTask } = useTasks();
</script>

<template>
  <div class="overflow-x-auto bg-white rounded-lg shadow-md border border-gray-200">
    <table class="w-full text-left border-collapse">
      <thead class="bg-gray-50">
        <tr>
          <th class="p-4 border-b">Nome</th>
          <th class="p-4 border-b">Tipo</th>
          <th class="p-4 border-b">Data</th>
          <th class="p-4 border-b">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tasks" :key="item.id" class="hover:bg-gray-50">
          <td class="p-4 border-b">{{ item.name }}</td>
          <td class="p-4 border-b">
            <span class="px-2 py-1 rounded text-xs bg-emerald-100 text-emerald-800">{{ item.type }}</span>
          </td>
          <td class="p-4 border-b">{{ item.date }}</td>
          <td class="p-4 border-b">
            <button @click="removeTask(item.id)" class="text-red-500 hover:underline">Excluir</button>
          </td>
        </tr>
        <tr v-if="tasks.length === 0">
          <td colspan="4" class="p-8 text-center text-gray-500">Nenhuma atividade cadastrada.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>