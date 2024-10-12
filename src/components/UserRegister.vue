<template>
  <nav>
    <router-link to="/register" class="button">Registro</router-link>
    <router-link to="/login" class="button">Iniciar Sesión</router-link>
  </nav>
  <div class="form-container">
    <form @submit.prevent="registerUser" class="register-form">
      <h2>Registro de Usuario</h2>
      <br />
      <div>
        <input v-model="email" type="email" placeholder="Email" required class="input-field" />
      </div>
      <div>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="input-field"
        />
      </div>
      <button type="submit" class="submit-button">Registrar</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'UserRegister', // Cambia aquí el nombre del componente
  setup() {
    const email = ref('')
    const password = ref('')
    const router = useRouter()

    const registerUser = async () => {
      try {
        const response = await axios.post('http://localhost:3000/api/users/register', {
          email: email.value,
          password: password.value,
          createdBy: 'admin@example.com'
        })
        alert('Registro exitoso: ' + response.data.message)
        router.push('/login') // Cambia '/login'
      } catch (error: any) {
        alert('Error en el registro: ' + error.response.data.message)
      }
    }

    return {
      email,
      password,
      registerUser
    }
  }
})
</script>

<style scoped>
nav {
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* Centra el nav */
  gap: 10px; /* Espacio entre botones */
}

.button {
  background-color: transparent;
  color: white; /* Color similar al verde de Vue */
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none; /* Sin subrayado */
  font-weight: bold;
  height: 50px;
  margin-top: 5%;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.button:hover {
  background-color: white;
  color: #4caf50;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra el formulario */
  justify-content: center;
  height: 100vh; /* Hace que ocupe toda la altura de la ventana */
}

.register-form {
  background-color: #f9f9f9; /* Color de fondo suave */
  padding: 20px;
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.input-field {
  width: 100%;
  padding: 10px;
  margin: 10px 0; /* Espaciado vertical */
  border: 1px solid #ccc;
  border-radius: 5px; /* Bordes redondeados */
}

.submit-button {
  background-color: #4caf50; /* Verde de Vue */
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px; /* Bordes redondeados */
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049; /* Un verde más oscuro al pasar el mouse */
}

h2 {
  color: rgb(90, 90, 90);
}
</style>
