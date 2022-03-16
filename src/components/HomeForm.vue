<template>
  <div>
    <ul>
      <li v-for="room in roomList" v-bind:key="room.roomName">
        <router-link
          :to="/roomhome/ + room.roomId"
          tag="span"
          style="cursor: pointer"
        >
          <div class="box">{{ room.roomName }}</div>
        </router-link>
      </li>
    </ul>
    <i class="fas fa-plus-circle" @click="createRoom"></i>
    <modal v-show="showModal" :open="showModal" @close="showModal = false">
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
      roomList: [],
      showModal: false,
    };
  },
  async created() {
    this.$store.commit('initData');
    const myId = this.$route.params.id;
    await this.$store.dispatch('myRoomList', myId);
    this.roomList = this.$store.state.Room.myRooms;
    console.log(this.roomList);
  },
  methods: {
    createRoom() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style></style>
