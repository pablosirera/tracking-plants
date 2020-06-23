<template>
  <form class="flex items-center justify-center flex-col pb-12 px-16">
    <div class="field">
      <label for="email">
        Email
      </label>
      <input v-model="email" class="input" type="text" id="email" />
    </div>
    <div class="field">
      <label for="password">
        Contraseña
      </label>
      <input v-model="password" class="input" type="password" id="password" />
    </div>
    <div class="wrapper-buttons">
      <button type="button" @click="handleAction('login')">
        Iniciar sesión
      </button>
      <button type="button" @click="handleAction('register')">
        Registrar
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AuthForm',
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    handleAction(action) {
      this.$emit('auth', { action, email: this.email, pass: this.password })
      this.deleteDataForm()
    },
    deleteDataForm() {
      this.email = null
      this.password = null
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  @apply py-4 flex flex-col;

  .input {
    @apply border py-2 px-4;
  }
}

.wrapper-buttons {
  @apply flex justify-between w-full;

  button {
    @apply border bg-green-400 py-1 px-4 rounded-lg text-white font-bold;
  }
}
</style>
