<template>
  <div>
    <h1>NEW</h1>
    <input placeholder="방 이름을 입력하세요" v-model="roomname" type="text" />
    <span class="addContainer" @click="create">
      <i class="far fa-plus-square add"></i>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomname: '',
    };
  },
  methods: {
    create() {
      const roomInfo = {
        roomname: this.roomname,
        managerId: this.$store.state.LoginSignup.nowUserI,
        users: [
          {
            userId: this.$store.state.LoginSignup.nowUserId,
            userName: this.$store.state.LoginSignup.nowUserName,
          },
        ],
        inviteUrl: {},
      };
      this.$store.dispatch('newRoom', roomInfo);
    },
  },
};
</script>

<style></style>
