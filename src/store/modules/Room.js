import axios from 'axios';

const Room = {
  state: {
    //전체홈
    myRooms: [],
    newRoom: [],
    goRoomId: '',

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
    goRoomId(state, payload) {
      state.goRoomId = payload;
      console.log(state.goRoomId);
    },
    setRoomName(state, payload) {
      state.roomName = payload;
    },
    setRoomUsers(state, payload) {
      state.roomUsers = payload;
    },
    setRoomId(state, payload) {
      state.roomId = payload;
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
      const newRoomList = [];
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms`)
        .then(res => {
          const roomFilter = [];
          res.data.filter(e => {
            e.users.filter(d => {
              if (d.userId == payload) {
                return roomFilter.push(e);
              }
            });
          });
          for (let i = 0; i < roomFilter.length; i++) {
            newRoomList[i] = {
              roomName: roomFilter[i].roomname,
              roomId: roomFilter[i].id,
            };
          }
          commit('roomList', newRoomList);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async newRoom({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
        await axios.post(`${'http://localhost:8000'}/rooms`, payload)
        .then(res => {
          console.log(res);
          commit('newRoom', payload);
          return res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async goToRoom({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms?roomname=${payload}`)
        .then(res => {
          console.log(res.data.id);
          commit('goRoomId', res.data[0].id);
          return res.data.id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async setRooms({ commit }, payload) {
      const newSetName = [];
      // eslint-disable-next-line prettier/prettier
       await axios.get(`${'http://localhost:8000'}/rooms?id=${payload}`)
        .then(res => {
          commit('setRoomId', res.data[0].id);
          commit('setRoomName', res.data[0].roomname);
          for (let i = 0; i < res.data[0].users.length; i++) {
            newSetName[i] = res.data[0].users[i].userName;
          }
          commit('setRoomUsers', newSetName);
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
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms?id=${payload}`)
        .then(res => {
          const getMember = res.data[0].users;
          const newInfo = getMember.concat(userInfo);
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
