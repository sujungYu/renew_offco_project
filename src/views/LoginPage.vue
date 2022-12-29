<template>
  <div>
    <h1>offco</h1>
    <login-form></login-form>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
h1 {
  margin: 0.45em auto;
  display: inline-block;
  font-family: 'Kite One', sans-serif;
  font-weight: lighter;
  color: rgb(255, 134, 94);
  font-size: 9em;
  width: 62.5vw;
  height: 22.8vh;
}
</style>
