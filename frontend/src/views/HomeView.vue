<script setup>
import { storeToRefs } from 'pinia';
import { RouterLink, RouterView } from 'vue-router';
import { useAuthStore, useUsuariosStore } from '@/stores';
import SidebarView from './SidebarView.vue';

const authStore = useAuthStore();
const { usuario: authUser } = storeToRefs(authStore);
console.log(authUser);

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
        <p>Usuários cadastrados no sistema:</p>
        <ul v-if="usuarios.length">
          <li v-for="usuario in usuarios" :key="usuario.idUsuario">{{ usuario.nomeUsuario }}
            ({{ usuario.emailUsuario }})</li>
        </ul>
        <div v-if="usuarios.loading" class="spinner-border spinner-border-sm"></div>
        <div v-if="usuarios.error" class="text-danger">Error loading users: {{ usuarios.error }}</div>
      </div>
    </main>
  </div>
</template>
