import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/analises/listar`;

export const useAnalisesStore = defineStore({
    id: 'analises',
    state: () => ({
        analises: {}
    }),
    actions: {
        async getAll() {
            this.analises = { loading: true };
            fetchWrapper.get(baseUrl)
                .then(analises => this.analises = analises)
                .catch(error => this.analises = { error })
        }
    }
});
