import axios from 'axios';

const Room = {
  state: {
    //전체홈
    myRooms: [],
    newRoom: [],

    // 각 방홈
    roomUsers: [],
    roomName: '',
    roomId: '',
    token: '',
    useToken: '',
    TokenId: '',
  },
  mutations: {
    initData(state) {
      state.myRooms = [];
    },
    initUserData(state) {
      state.roomUsers = [];
    },
    roomList(state, payload) {
      state.myRooms = payload;
      console.log(state.myRooms);
    },
    newRoom(state, payload) {
      state.newRoom = payload;
    },
    setRoomName(state, payload) {
      state.roomName = payload;
    },
    setRoomUsers(state, payload) {
      console.log(payload);
      state.roomUsers.push(payload);
      console.log(state.roomUsers);
    },
    setRoomId(state, payload) {
      state.roomId = payload;
      console.log(state.roomId);
    },
    setToken(state, payload) {
      state.token = payload;
    },
    useToken(state, payload) {
      state.useToken = payload;
    },
    TokenId(state, payload) {
      state.TokenId = payload;
    },
  },
  actions: {
    async myRoomList({ commit }, payload) {
      console.log(payload);
      //이부분 접근방식 수정
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms/users.userId=${payload}`)
        .then(res => {
          console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
            res.data[i] = {
              roomName: res.data[i].roomname,
              roomId: res.data[i].id,
            };
          }
          console.log(res.data);
          commit('roomList', res.data);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    newRoom({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
        axios.post(`${'http://localhost:8000'}/rooms`, payload)
        .then(res => {
          console.log(res);
          commit('newRoom', payload);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async setRooms({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
       await axios.get(`${'http://localhost:8000'}/rooms?id=${payload}`)
        .then(res => {
          commit('setRoomId', res.data[0].id);
          commit('setRoomName', res.data[0].roomname);
          for (let i = 0; i < res.data.length; i++) {
            res.data[i].users = res.data[i].users[i].userName;
          }
          commit('setRoomUsers', res.data[0].users);
          return res.data[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    inviteToken({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      axios.patch(`${'http://localhost:8000'}/rooms/${this.getters.RoomId}`, {inviteUrl: payload})
        .then(res => {
          commit('setToken', payload);
          console.log(res);
        })
        .catch(err => {
          // commit('useToken', false);
          console.log(err);
        });
    },
    checkToken({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      axios.get(`${'http://localhost:8000'}/rooms?inviteUrl=${payload}`)
        .then(res => {
          if (res.data[0]) {
            commit('useToken', true);
            commit('TokenId', res.data[0].id);
          } else {
            commit('useToken', false);
          }
        });
    },
    async RoomMember({ commit }, payload) {
      const userInfo = {
        userId: JSON.parse(localStorage.getItem('user')).userId,
        userName: JSON.parse(localStorage.getItem('user')).userName,
      };
      console.log(userInfo);
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms?id=${payload}`)
        .then(res => {
          const arr = res.data[0].users;
          console.log(arr);
          const newInfo = arr.concat(userInfo);
          console.log(newInfo);
          // eslint-disable-next-line prettier/prettier
          axios.patch(`${'http://localhost:8000'}/rooms/${payload}`, {users: newInfo})
            .then(res => {
              console.log(res);
              commit('setRoomId', payload);
            })
            .catch(err => {
              console.log(err);
            });
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });

      // await axios.post(`${'http://localhost:8000'}/rooms/${payload}/users/`, userInfo)
      //   .then(res => {
      //     console.log(userInfo);
      //     console.log(payload);
      //     console.log(res.data);
      //     commit('setRoomId', payload);
      //     return res.data;
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
    },
  },
  getters: {
    RoomId(state) {
      return state.roomId;
    },
    TokenId(state) {
      return state.TokenId;
    },
  },
};
export default Room;
