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
    initUserData(state) {
      state.roomUsers = [];
    },
    initNameData(state) {
      state.roomName = '';
    },
    roomList(state, payload) {
      state.myRooms = payload;
    },
    newRoom(state, payload) {
      state.newRoom = payload;
    },
    goRoomId(state, payload) {
      state.goRoomId = payload;
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
      const roomList = [];
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
            roomList[i] = {
              roomName: roomFilter[i].roomname,
              roomId: roomFilter[i].id,
            };
          }
          commit('roomList', roomList);
          return roomList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async goToRoom({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms?roomname=${payload}`)
        .then(res => {
          commit('goRoomId', res.data[0].id);
          return res.data[0].id;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async setUsers({ commit }, payload) {
      const userList = [];
      // eslint-disable-next-line prettier/prettier
       await axios.get(`${'http://localhost:8000'}/rooms?id=${payload}`)
        .then(res => {
          for (let i = 0; i < res.data[0].users.length; i++) {
            userList[i] = res.data[0].users[i].userName;
          }
          commit('setRoomUsers', userList);
          return userList;
        })
        .catch(err => {
          console.log(err);
        });
    },
    async setName({ commit }, payload) {
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms?id=${payload}`)
        .then(res => {
          commit('setRoomName', res.data[0].roomname);
          return res.data[0].roomname;
        })
        .catch(err => {
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
