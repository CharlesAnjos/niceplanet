import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore, usePropriedadeStore } from '@/stores';
import { HomeView, LoginView, BuscaPropriedadeView, ListaAnalisesView, DetalheAnaliseView } from '@/views';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomeView },
        { path: '/login', component: LoginView },
        { path: '/buscar-propriedade', component: BuscaPropriedadeView },
        { path: '/listar-analises', component: ListaAnalisesView },
        { path: '/detalhe-analise/:id', component: DetalheAnaliseView },
    ]
});

router.beforeEach(async (to) => {
    // limpa os dados da última propriedade buscada no estado da aplicação
    const propriedadeStore = usePropriedadeStore();
    propriedadeStore.clear();

    // redireciona para a página de login caso não autenticado
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.usuario) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
