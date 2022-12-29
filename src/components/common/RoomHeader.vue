<template>
  <div>
    <div class="header-container">
      <i class="fas fa-arrow-left backward" @click="backward"></i>offco
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
    };
  },
  methods: {
    getUserId() {
      this.userId = JSON.parse(localStorage.getItem('user')).userId;
    },
    backward() {
      this.getUserId();
      this.$router.push('/home/' + this.userId);
    },
  },
};
</script>

<style scoped>
.header-container {
  height: 9vh;
  background-color: rgb(255, 134, 94);
  font-size: 5.3vh;
  color: white;
  font-family: 'Kite One', sans-serif;
  text-align: center;
  padding-left: 3vw;
}
.backward {
  left: 4vw;
  top: 2vh;
  position: absolute;
}
</style>
