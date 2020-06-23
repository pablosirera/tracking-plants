<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex items-center justify-center flex-col pb-12 px-16"
  >
    <div class="field">
      <label for="email">
        Email
      </label>
      <input class="input" type="text" id="email" />
    </div>
    <div class="field">
      <label for="password">
        Contraseña
      </label>
      <input class="input" type="text" id="password" />
    </div>
    <div class="wrapper-buttons">
      <button>Iniciar sesión</button>
      <button>Registrar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AuthForm'
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
