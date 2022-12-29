import axios from 'axios';

const LoginSignup = {
  state: {
    //   회원가입
    idMessage: '',
    useId: '',
    // 로그인
    nowUserId: '',
    nowUserName: '',
  },
  mutations: {
    checkIdMessage(state, payload) {
      state.idMessage = payload.message;
      state.useId = payload.useId;
    },
    loginUserId(state, payload) {
      state.nowUserId = payload;
    },
    loginUserName(state, payload) {
      state.nowUserName = payload;
    },
    logOut(state) {
      state.nowUserId = '';
    },
  },
  actions: {
    async checkId({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/signup?userid=${payload}`)
        .then(res => {
          if (res.data == 0) {
            const message = {
              message: '사용가능한 아이디입니다',
              useId: true,
            };
            commit('checkIdMessage', message);
            return message;
          } else {
            const message = {
              message: '이미 사용중인 아이디입니다',
              useId: false,
            };
            commit('checkIdMessage', message);
            return message;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    async login({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/signup?userid=${payload}`)
        .then(res => {
          commit('loginUserId', res.data[0].id);
          localStorage.setItem(
            'user',
            JSON.stringify({
              userId: res.data[0].id,
              userName: res.data[0].username,
            }),
          );
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  getters: {
    loginUserId(state) {
      return state.nowUserId;
    },
    loginUserName(state) {
      return state.nowUserName;
    },
  },
};
export default LoginSignup;
