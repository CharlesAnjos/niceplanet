<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

import { useAuthStore } from '@/stores';

const schema = Yup.object().shape({
  emailUsuario: Yup.string().required('Email é obrigatório!'),
  senhaUsuario: Yup.string().required('Senha é obrigatória!')
});

function onSubmit(values, { setErrors }) {
  const authStore = useAuthStore();
  const { emailUsuario, senhaUsuario } = values;

  return authStore.login(emailUsuario, senhaUsuario)
    .catch(error => setErrors({ apiError: error }));
}
</script>

<template>
  <div class="d-flex justify-content-center align-items-center" style="height: 90vh">
    <div>
      <h2>Login</h2>
      <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
        <div class="form-group">
          <label>Usuário</label>
          <Field name="emailUsuario" type="text" class="form-control" :class="{ 'is-invalid': errors.emailUsuario }" />
          <div class="invalid-feedback">{{ errors.emailUsuario }}</div>
        </div>
        <div class="form-group">
          <label>Senha</label>
          <Field name="senhaUsuario" type="senhaUsuario" class="form-control"
            :class="{ 'is-invalid': errors.senhaUsuario }" />
          <div class="invalid-feedback">{{ errors.senhaUsuario }}</div>
        </div>
        <div class="form-group">
          <button class="btn btn-primary" :disabled="isSubmitting">
            <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
            Login
          </button>
        </div>
        <div v-if="errors.apiError" class="alert alert-danger mt-3 mb-0">{{ errors.apiError }}</div>
      </Form>
    </div>
  </div>
</template>
