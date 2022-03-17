<template>
  <div>
    <ul v-for="user in users" :key="user">
      <li>
        <h2><i class="fas fa-user-circle user"></i>&nbsp;&nbsp;{{ user }}</h2>
      </li>
    </ul>
    <button class="invite" @click="invite">
      멤버초대&nbsp;<i class="fas fa-plus"></i>
    </button>
    <modal v-show="showModal" :open="showModal" @close="showModal = false">
      <invite></invite>
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';
import Invite from './Invite.vue';
export default {
  components: {
    Modal,
    Invite,
  },
  data() {
    return {
      users: [],
      showModal: false,
    };
  },
  async created() {
    this.$store.commit('initUserData');
    const roomId = this.$route.params.id;
    await this.$store.dispatch('setRooms', roomId);
    this.users = this.$store.state.Room.roomUsers;
    console.log(this.users);
  },
  methods: {
    invite() {
      this.showModal = !this.showModal;
      // this.$router.push('./invite')
    },
  },
};
</script>

<style></style>
