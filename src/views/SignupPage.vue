<template>
  <div class="signup-page-container">
    <h1>offco</h1>
    <i class="fas fa-times cancel" @click="outSingupPage"></i>
    <hr
      style="width:100%; height:2px; border:none; background-color:rgb(255, 134, 94)"
    />
    <h2>회원가입</h2>
    <signup-from></signup-from>
  </div>
</template>

<script>
import SignupFrom from '../components/SignupForm.vue';
export default {
  components: {
    SignupFrom,
  },
  methods: {
    outSingupPage() {
      this.$router.replace('./login');
    },
  },
};
</script>

<style scoped>
.signup-page-container {
  font-size: 10px;
  background-color: white;
  text-align: center;
  height: 100vh;
  position: relative;
}
h1,
h2 {
  display: inline-block;
  font-family: 'Kite One', sans-serif;
  color: rgb(255, 134, 94);
}
h1 {
  font-weight: lighter;
  font-size: 3em;
  width: 22vw;
  height: 7vh;
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}
h2 {
  font-weight: normal;
  font-size: 18px;
  width: 25vw;
  height: 6vh;
  margin: 0;
}
.cancel {
  position: absolute;
  color: rgb(255, 134, 94);
  font-size: 3em;
  margin-top: 0.5em;
  margin-bottom: 0.2em;
  left: 85%;
}
</style>
