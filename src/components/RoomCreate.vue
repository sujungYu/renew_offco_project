<template>
  <div>
    <h1>방 만들기</h1>
    <input placeholder="방 이름을 입력하세요" v-model="roomName" type="text" />
    <span class="add-room-container" @click="addNewRoom">
      <i class="far fa-plus-square add"></i>
    </span>
  </div>
</template>

<script>
import { newRoom } from '@/api/index.js';
export default {
  data() {
    return {
      roomName: '',
    };
  },
  methods: {
    async addNewRoom() {
      await this.addNewRoomInfo();
      await this.$store.dispatch('goToRoom', this.roomName);
      this.moveNewRoom();
    },
    async addNewRoomInfo() {
      const roomInfo = {
        roomname: this.roomName,
        managerId: JSON.parse(localStorage.getItem('user')).userId,
        users: [
          {
            userId: JSON.parse(localStorage.getItem('user')).userId,
            userName: JSON.parse(localStorage.getItem('user')).userName,
          },
        ],
        inviteUrl: {},
      };
      await newRoom(roomInfo);
    },
    moveNewRoom() {
      this.$router.push(`/roomhome/${this.$store.state.Room.goRoomId}`);
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 6vh auto;
  font-family: 'Gothic A1', sans-serif;
  font-size: 3em;
  color: rgb(57, 62, 70);
}
input {
  width: 70vw;
  height: 6.2vh;
  padding-left: 5vw;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
}
.add-room-container {
  position: relative;
  display: inline-block;
}
.add {
  font-size: 1.9em;
  position: absolute;
  right: 5vw;
  bottom: -1vh;
}
</style>
