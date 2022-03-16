import axios from 'axios';

const LoginSignup = {
  state: {
    //   회원가입
    idMessage: '',
    useId: '',
    userName: '',
    // 로그인
    nowUserId: '',
  },
  mutations: {
    checkIdMessage(state, payload) {
      state.idMessage = payload.message;
      state.useId = payload.useId;
    },
    setUser(state, payload) {
      state.userName = payload;
    },
    loginUser(state, payload) {
      state.nowUserId = payload;
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
    signUp({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      axios.post(`${'http://localhost:8000'}/signup`, payload)
        .then(res => {
          commit('setUser', res.data.username);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async login({ commit }, payload) {
      console.log(payload);
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/signup?userid=${payload}`)
        .then(res => {
          commit('loginUser', res.data[0].id);
          return res.data.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  getters: {},
};
export default LoginSignup;
