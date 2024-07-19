<script setup>
// imports do form
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import SidebarView from './SidebarView.vue';

// imports da consulta
import { storeToRefs } from 'pinia';
import { usePropriedadeStore } from '@/stores';

const estadoMonitoramento = ['Bloqueado', 'Liberado', 'Alerta']

// script do form
const schema = Yup.object().shape({
  car: Yup.string().required('Número do CAR é obrigatório!')
});

// script da consulta
const propriedadeStore = usePropriedadeStore();
const { propriedade } = storeToRefs(propriedadeStore);

function onSubmit(values) {
  propriedadeStore.getPropriedadePeloCAR(values.car);
}
</script>

<template>
  <div class="row">
    <SidebarView />

    <main class="col-md-9 ml-sm-auto col-lg-9 px-md-4" role="main">
      <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <h3 class="h2">Busca de Propriedades</h3>
        <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
          <div class="form-group">
            <label>Entre com o número do CAR</label>
            <Field name="car" type="text" class="form-control" :class="{ 'is-invalid': errors.car }" />
            <div class="invalid-feedback">{{ errors.car }}</div>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" :disabled="isSubmitting">
              <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
              Consultar
            </button>
          </div>
          <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{ errors.apiError }}</div>
        </Form>
        <div v-if="propriedade">
          <h4>Resultados da busca:</h4>
          <ul>
            <li><p>Nome da Propriedade: {{propriedade.nomePropriedade}}</p></li>
            <li><p>Número de cadastro ambiental rural: {{propriedade.numeroCar}}</p></li>
            <li><p>Produtores vinculados ao CAR: </p></li>
            <li><p>Local: {{propriedade.municipio}} - {{propriedade.uf}}</p></li>
            <li><p>Estado de monitoramento: {{ estadoMonitoramento[propriedade.liberado] }}</p></li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>
