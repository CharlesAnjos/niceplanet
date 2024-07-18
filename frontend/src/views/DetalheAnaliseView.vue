<script setup>
import SidebarView from './SidebarView.vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useAnaliseStore } from '@/stores';
const route = useRoute()

const estadoMonitoramento = ['Bloqueado', 'Liberado', 'Alerta']

const analiseStore = useAnaliseStore();
const { analise } = storeToRefs(analiseStore);
analiseStore.getAnalise(route.params.id);
</script>

<template>
  <div class="row">

    <SidebarView />

    <main class="col-md-9 ml-sm-auto col-lg-9 px-md-4" role="main">
      <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <div v-if="analise">
          <h3 class="h2">Detalhes da Análise:</h3>
          <ul>
            <li>
              <p>Nome do Produtor: {{ analise.produtorNome }}</p>
            </li>
            <li>
              <p>CPF do Produtor: {{ analise.produtorCpf }}</p>
            </li>
            <li>
              <p>Nome da Propriedade: {{ analise.propriedadeNome }}</p>
            </li>
            <li>
              <p>Número de cadastro ambiental rural: {{ analise.car }}</p>
            </li>
            <li>
              <p>Local: {{ analise.municipio }} - {{ analise.uf }}</p>
            </li>
            <li>
              <p>Estado de monitoramento: {{ estadoMonitoramento[analise.estadoMonitoramento] }}</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
