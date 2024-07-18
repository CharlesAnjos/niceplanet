<script setup>
import { storeToRefs } from 'pinia';
import { useAnalisesStore } from '@/stores';
import SidebarView from './SidebarView.vue';

const estadoMonitoramento = ['Bloqueado', 'Liberado', 'Alerta']

const analisesStore = useAnalisesStore();
const { analises } = storeToRefs(analisesStore);

analisesStore.getAll();

</script>

<template>
  <div class="row">
    <SidebarView />

    <main class="col-md-9 ml-sm-auto col-lg-9 px-md-4" role="main">
      <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <h3 class="h2">Bem-vindo!</h3>
        <p>Histórico de Análises:</p>
        <div class="table-responsive" v-if="analises.length">
          <table class="table table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome da Propriedade</th>
                <th scope="col">Local</th>
                <th scope="col">Estado de Monitoramento</th>
                <th scope="col">Operações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="analise in analises" :key="analise.id">
                <th scope="row">{{ analise.id }}</th>
                <td>{{ analise.propriedadeNome }}</td>
                <td>{{ analise.municipio }} - {{ analise.uf }}</td>
                <td>{{ estadoMonitoramento[analise.estadoMonitoramento] }}</td>
                <td>
                  <button class="btn btn-dark mr-2">
                    <i class="bi bi-pencil-square"></i>
                  </button>
                  <button class="btn btn-dark mr-2" 
                  @click="analisesStore.delete(analise.id)">
                    <i class="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>
</template>
