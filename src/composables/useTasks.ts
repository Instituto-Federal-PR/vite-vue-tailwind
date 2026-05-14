import { ref, watch, readonly } from 'vue';
import type { Task } from '../models/task.model';

// Estado global fora da função para manter os dados entre componentes
const tasks = ref<Task[]>(JSON.parse(localStorage.getItem('tasks') || '[]'));

export function useTasks() {
  // Salva no LocalStorage sempre que a lista mudar
  watch(tasks, (newList) => {
    localStorage.setItem('activities', JSON.stringify(newList));
  }, { deep: true });
  // Força o watch a monitorar o que acontece dentro de um objeto ou array 

  const addTask = (task: Task) => {
    tasks.value.push(task);
  };

  const removeTask = (id: string) => {
    tasks.value = tasks.value.filter(a => a.id !== id);
  };

  return {
    tasks: readonly(tasks), // Apenas leitura para os componentes
    addTask,
    removeTask
  };
}