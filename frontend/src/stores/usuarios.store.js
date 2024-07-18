import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/usuarios/listar`;

export const useUsuariosStore = defineStore({
    id: 'usuarios',
    state: () => ({
        usuarios: {}
    }),
    actions: {
        async getAll() {
            this.usuarios = { loading: true };
            fetchWrapper.get(baseUrl)
                .then(usuarios => this.usuarios = usuarios)
                .catch(error => this.usuarios = { error })
        }
    }
});
