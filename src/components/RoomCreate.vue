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
        managerId: this.$route.params.id,
        usersId: { user: this.$route.params.id },
      };
      this.$store.dispatch('newRoom', roomInfo);
    },
  },
};
</script>

<style></style>
