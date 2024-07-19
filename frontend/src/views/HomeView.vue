<script setup>
import { storeToRefs } from 'pinia';
import { useUsuariosStore } from '@/stores';
import SidebarView from './SidebarView.vue';

const usuariosStore = useUsuariosStore();
const { usuarios } = storeToRefs(usuariosStore);

usuariosStore.getAll();
</script>

<template>
  <div class="row">
    <SidebarView />

    <main class="col-md-9 ml-sm-auto col-lg-9 px-md-4" role="main">
      <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <h3 class="h2">Bem-vindo!</h3>
        Use o menu ao lado para acessar as funções do sistema.
      </div>
    </main>
  </div>
</template>
