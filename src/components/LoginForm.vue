<template>
  <div>
    <form @submit.prevent="submitLoginForm">
      <input class="id" type="text" placeholder="아이디" v-model="userId" />
      <input
        class="password"
        type="password"
        placeholder="비밀번호"
        v-model="userPassword"
        @keyup.enter="submitLoginForm()"
      />
      <button class="login-button">LOGIN</button>
    </form>
    <button class="signup-button" @click="moveSignupPage">회원가입</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPassword: '',
    };
  },
  methods: {
    async submitLoginForm() {
      await this.$store.dispatch('login', this.userId);
      const userNumber = this.$store.state.LoginSignup.nowUserId;
      this.moveHomePage(userNumber);
    },
    moveHomePage(userNumber) {
      this.$router.push(`/home/${userNumber}`);
    },
    moveSignupPage() {
      this.$router.replace('./signup');
    },
  },
};
</script>

<style scoped>
.id,
.password {
  display: inline-block;
  width: 82vw;
  height: 6.1vh;
  margin-left: 0;
  margin-bottom: 1.15em;
  border: 1px solid rgba(162, 210, 255, 100);
  border-radius: 15px;
}
.login-button,
.signup-button {
  font-family: 'Gothic A1', sans-serif;
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  margin-top: 0.8em;
  border-radius: 15px;
}
.login-button {
  border: rgb(28, 31, 34);
  background-color: rgb(162, 210, 255);
  color: rgb(57, 62, 70);
  margin-bottom: 0.8em;
}
.signup-button {
  border: 1px solid rgb(255, 134, 94);
  background-color: white;
  color: rgb(255, 134, 94);
}
</style>
