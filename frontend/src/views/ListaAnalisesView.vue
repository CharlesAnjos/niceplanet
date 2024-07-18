<script setup>
import { storeToRefs } from 'pinia';
import { useAnalisesStore } from '@/stores';
import SidebarView from './SidebarView.vue';

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
        <ul v-if="analises.length">
          <li v-for="analise in analises" :key="analise.id">{{ analise.propriedadeNome }}
            ({{ analise.car }})</li>
        </ul>
        <div v-if="analises.loading" class="spinner-border spinner-border-sm"></div>
        <div v-if="analises.error" class="text-danger">Error loading users: {{ analises.error }}</div>
      </div>
    </main>
  </div>
</template>
