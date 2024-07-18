import { defineStore } from 'pinia';

import { fetchWrapper, router } from '@/helpers';

const baseUrl = `${import.meta.env.VITE_API_URL}`;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable usuario to stay logged in
        usuario: JSON.parse(localStorage.getItem('usuario')),
        returnUrl: null
    }),
    actions: {
        async login(emailUsuario, senhaUsuario) {
            const usuario = await fetchWrapper.post(`${baseUrl}/authenticate`, { emailUsuario, senhaUsuario });

            // update pinia state
            console.log(usuario);
            this.usuario = usuario;

            // store usuario details and jwt in local storage to keep usuario logged in between page refreshes
            localStorage.setItem('usuario', JSON.stringify(usuario));

            // redirect to previous url or default to home page
            router.push(this.returnUrl || '/');
        },
        logout() {
            this.usuario = null;
            localStorage.removeItem('usuario');
            router.push('/login');
        }
    }
});
