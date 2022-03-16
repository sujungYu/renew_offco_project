import axios from 'axios';

const Room = {
  state: {
    myRooms: [],
    newRoom: [],
  },
  mutations: {
    initData(state) {
      state.myRooms = [];
    },
    roomList(state, payload) {
      state.myRooms = payload;
      console.log(state.myRooms);
    },
    newRoom(state, payload) {
      state.newRoom = payload;
    },
  },
  actions: {
    async myRoomList({ commit }, payload) {
      console.log(payload);
      // eslint-disable-next-line prettier/prettier
      await axios.get(`${'http://localhost:8000'}/rooms?usersId.user=${payload}`)
        .then(res => {
          console.log(res);
          for (let i = 0; i < res.data.length; i++) {
            res.data[i] = {
              roomName: res.data[i].roomname,
              roomId: res.data[i].id,
            };
          }
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
  },
  getters: {},
};
export default Room;
