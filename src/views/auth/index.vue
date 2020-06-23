<template>
  <section class="custom-container flex items-center justify-center h-screen">
    <div class="card w-full px-3">
      <h1 class="text-xl text-center font-semibold py-8">
        Bienvenido a Tracking Plants
      </h1>
      <AuthForm />
    </div>
  </section>
</template>

<script>
import AuthForm from '@/views/auth/components/AuthForm'

export default {
  name: 'Auth',
  components: {
    AuthForm
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: fit-content;
  border-radius: 15px;
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2),
    0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);
}
</style>
