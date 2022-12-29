<template>
  <div>
    <ul class="home-container">
      <li v-for="room in rooms" :key="room.roomName">
        <router-link
          :to="/roomhome/ + room.roomId"
          tag="span"
          style="cursor: pointer"
        >
          <div class="room-name">{{ room.roomName }}</div>
        </router-link>
        <hr class="line" />
      </li>
    </ul>
    <i class="fas fa-plus-circle create-room" @click="createNewRoom"></i>
    <modal
      v-show="createRoomModal"
      :open="createRoomModal"
      @close="createRoomModal = false"
    >
      <room-create></room-create>
    </modal>
  </div>
</template>

<script>
import RoomCreate from './RoomCreate.vue';
import Modal from './common/Modal.vue';
export default {
  components: {
    RoomCreate,
    Modal,
  },
  data() {
    return {
      rooms: [],
      createRoomModal: false,
    };
  },
  created() {
    this.getRoomSet();
  },
  methods: {
    async getRoomSet() {
      await this.$store.dispatch('myRoomList', this.$route.params.id);
      this.rooms = this.$store.state.Room.myRooms;
    },
    createNewRoom() {
      this.createRoomModal = !this.createRoomModal;
    },
  },
};
</script>

<style scoped>
.home-container {
  padding-left: 0;
  list-style-type: none;
  text-align: center;
}
.home-container li {
  display: inline-block;
}
.room-name {
  width: 80.9vw;
  height: 8.3vh;
  font-family: 'Gothic A1', sans-serif;
  font-size: 2em;
  border: 1px solid rgb(57, 62, 70);
  border-radius: 15px;
  line-height: 8.8vh;
  margin-bottom: 2.1vh;
  background-color: white;
}
.create-room {
  font-size: 3.5em;
  color: rgb(255, 134, 94);
  left: 32vw;
  position: relative;
  margin-bottom: 3vh;
}
.line {
  width: 81vw;
  height: 1px;
  border: none;
  background-color: rgba(57, 62, 70, 0.4);
  margin: 2.8vh 0;
}
</style>
