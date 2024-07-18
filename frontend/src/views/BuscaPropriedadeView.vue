<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';
import SidebarView from './SidebarView.vue';

const schema = Yup.object().shape({
  car: Yup.string().required('Número do CAR é obrigatório!')
});

function onSubmit(values) {
  const { car } = values;
  console.log(car);
}
</script>

<template>
  <div class="row">
    <SidebarView />

    <main class="col-md-9 ml-sm-auto col-lg-9 px-md-4" role="main">
      <div class="justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
        <h3 class="h2">Bem-vindo!</h3>
        <p>Busca de Propriedades:</p>
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
      </div>
    </main>
  </div>
</template>
