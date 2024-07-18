import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/analises/consultar/`;

export const useAnaliseStore = defineStore({
  id: 'analise',
  state: () => ({
    analise: {}
  }),
  actions: {
    async getAnalise(id) {
      this.analise = { loading: true };
      fetchWrapper.get(baseUrl + id)
        .then(analise => this.analise = analise)
        .catch(error => this.analise = { error })
    },
    clear() {
      this.analise = null;
      localStorage.removeItem('analise');
    }
  }
});
