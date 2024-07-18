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
    <div>
        <h1>Olá!</h1>
        <p>Você está logado na consulta NicePlanet</p>
        <h3>Usuários cadastrados neste sistema:</h3>
        <ul v-if="usuarios.length">
            <li v-for="usuario in usuarios" :key="usuario.idUsuario">{{usuario.nomeUsuario}} ({{usuario.emailUsuario}})</li>
        </ul>
        <div v-if="usuarios.loading" class="spinner-border spinner-border-sm"></div>
        <div v-if="usuarios.error" class="text-danger">Error loading users: {{usuarios.error}}</div>
    </div>
</template>
