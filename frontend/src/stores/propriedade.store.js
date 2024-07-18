import { defineStore } from 'pinia';

import { fetchWrapper } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}/propriedades/car/`;

export const usePropriedadeStore = defineStore({
  id: 'propriedade',
  state: () => ({
    propriedade: {}
  }),
  actions: {
    async getPropriedadePeloCAR(car) {
      this.propriedade = { loading: true };
      fetchWrapper.get(baseUrl + car)
        .then(propriedade => this.propriedade = propriedade)
        .catch(error => this.propriedade = { error })
    },
    clear() {
      this.propriedade = null;
      localStorage.removeItem('propriedade');
    }
  }
});
