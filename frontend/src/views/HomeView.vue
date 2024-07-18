<script setup>
import { storeToRefs } from 'pinia';

import { useAuthStore, useUsuariosStore } from '@/stores';

const authStore = useAuthStore();
const { usuario: authUser } = storeToRefs(authStore);
console.log(authUser);

const usuariosStore = useUsuariosStore();
const { usuarios } = storeToRefs(usuariosStore);

usuariosStore.getAll();
</script>

<template>
  <div class="container-fluid main-screen">
    <div class="row">

      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="sidebar-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" href="#">Link 1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Link 2</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">Link 3</a>
            </li>
          </ul>
        </div> 
      </nav>

      <main class="col-md-9 col-lg-10 px-md-4" role="main">
        <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
          <h3 class="h2">Usuários cadastrados neste sistema:</h3>
          <ul v-if="usuarios.length">
            <li v-for="usuario in usuarios" :key="usuario.idUsuario">{{ usuario.nomeUsuario }}
              ({{ usuario.emailUsuario }})</li>
          </ul>
          <div v-if="usuarios.loading" class="spinner-border spinner-border-sm"></div>
          <div v-if="usuarios.error" class="text-danger">Error loading users: {{ usuarios.error }}</div>
        </div>
      </main>
    </div>
  </div>
</template>
