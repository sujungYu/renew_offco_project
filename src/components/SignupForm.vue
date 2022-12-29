<template>
  <div>
    <form @submit.prevent="submitSignupForm">
      <div>
        <input class="name" type="text" placeholder="이름" v-model="userName" />
      </div>

      <div>
        <input
          class="email"
          type="text"
          placeholder="이메일"
          v-model="userMail"
        />
        <template v-if="this.userMail !== '' && !this.emailValid">
          <div>
            <p>이메일 형식이 올바르지 않습니다</p>
          </div>
        </template>
      </div>

      <div>
        <input class="id" type="text" placeholder="아이디" v-model="userId" />
        <button class="id-check" @click.prevent="idDuplicateCheck">
          중복확인
        </button>
      </div>
      <p>{{ idMessage }}</p>

      <div>
        <input
          class="password"
          type="password"
          placeholder="비밀번호"
          v-model="userPassword"
        />
        <template v-if="this.userPassword !== '' && !this.passwordValid">
          <div>
            <p>비밀번호 형식이 올바르지 않습니다</p>
          </div>
        </template>
      </div>

      <div>
        <input
          class="password"
          type="password"
          placeholder="비밀번호 확인"
          v-model="checkPassword"
        />
        <template
          v-if="
            this.userPassword !== '' &&
              this.checkPassword !== '' &&
              !this.passwordDoubleCheck
          "
        >
          <div>
            <p>비밀번호를 다시 확인해주세요</p>
          </div>
        </template>
      </div>

      <button class="signup-button" type="submit">회원가입</button>
    </form>
  </div>
</template>

<script>
import {
  validateEmail,
  validatePassword,
  validateCheckPassword,
} from '@/utils/validation';
import { signUp } from '@/api/index.js';
export default {
  data() {
    return {
      userName: '',
      userMail: '',
      userId: '',
      userPassword: '',
      checkPassword: '',
      idMessage: '',
      isIdDuplicat: false,
    };
  },
  computed: {
    emailValid() {
      return validateEmail(this.userMail);
    },
    passwordValid() {
      return validatePassword(this.userPassword);
    },
    passwordDoubleCheck() {
      return validateCheckPassword(this.userPassword, this.checkPassword);
    },
  },
  methods: {
    async idDuplicateCheck() {
      await this.$store.dispatch('checkId', this.userId);
      this.idMessage = this.$store.state.LoginSignup.idMessage;
      this.isIdDuplicat = this.$store.state.LoginSignup.useId;
    },
    errorMessage() {
      if (!this.emailValid) {
        return alert('이메일을 확인 해주세요');
      } else if (!this.passwordValid) {
        return alert('비밀번호를 확인 해주세요');
      } else if (!this.isIdDuplicat) {
        return alert('아이디를 중복 확인 해주세요');
      } else if (this.userName == '') {
        return alert('이름을 입력해주세요.');
      }
      return true;
    },
    submitSignupForm() {
      const error = this.errorMessage();

      if (error) {
        const newUser = {
          username: this.userName,
          usermail: this.userMail,
          userid: this.userId,
          userpassword: this.userPassword,
        };
        signUp(newUser);
        alert(`${this.userName} 님이 가입되었습니다.`);
        this.$router.push('./login');
      }
    },
  },
};
</script>

<style scoped>
div {
  font-size: 10px;
  background-color: white;
  text-align: center;
  position: relative;
}
input {
  position: relative;
  display: inline-block;
  justify-content: space-between;
}
p {
  font-size: 1.6em;
  font-family: 'Gothic A1', sans-serif;
}
.name,
.email,
.password,
.id {
  border: 1px solid rgba(57, 62, 70, 100);
  height: 6.1vh;
  margin-bottom: 1.15em;
  display: inline-block;
  position: relative;
}
.name,
.email,
.password {
  width: 82vw;
  margin-left: 0;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.id {
  justify-content: space-between;
  width: 57vw;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
.signup-button,
.id-check {
  font-family: 'Gothic A1', sans-serif;
  border: 1px solid rgb(255, 134, 94);
  border-radius: 15px;
  background-color: white;
  color: rgb(255, 134, 94);
}
.signup-button {
  font-size: 2.6em;
  width: 82vw;
  height: 9vh;
  margin-top: 0.8em;
}
.id-check {
  display: inline-block;
  justify-content: flex-end;
  font-size: 1.5em;
  width: 25vw;
  height: 6.9vh;
  left: 70vw;
  top: -1.5vh;
}
</style>
