<template>
  <div>
    <h1 class="title">{{ roomName }}</h1>
    <div class="navbar">
      <router-link :to="/roomhome/ + this.roomId">홈</router-link>
      <router-link :to="/chathome/ + this.roomId">채팅</router-link>
      <router-link :to="/calendar/ + this.roomId">일정</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roomId: null,
      roomName: '',
    };
  },
  created() {
    this.getRoomInfo();
  },
  methods: {
    async getRoomInfo() {
      await this.$store.dispatch('setName', this.$route.params.id);
      this.roomId = this.$route.params.id;
      this.roomName = this.$store.state.Room.roomName;
    },
  },
};
</script>

<style scoped>
.title {
  margin: 1.9vh auto;
  width: 84vw;
  height: 7.6vh;
  color: white;
  background-color: rgb(255, 134, 94);
  text-align: center;
  font-size: 1.8em;
  font-family: 'Gothic A1', sans-serif;
  position: relative;
  line-height: 8vh;
  border-radius: 15px;
}
.navbar {
  font-size: 1.8em;
  font-family: 'Gothic A1', sans-serif;
  font-weight: 600;
  vertical-align: middle;
  justify-content: space-around;
  display: flex;
}
</style>
