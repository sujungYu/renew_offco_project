<template>
  <div>
    <div class="top">
      offco<i class="fas fa-sign-out-alt out" v-on:click="out"></i>
    </div>
    <div class="back">
      <h1>전체</h1>
      <hr
        style="width:81vw; height:1px; border:none; background-color:rgb(162, 210, 255); margin-bottom:6vh"
      />
      <home-form></home-form>
    </div>
  </div>
</template>

<script>
import HomeForm from '@/components/HomeForm.vue';
export default {
  components: {
    HomeForm,
  },
  methods: {
    createRoom() {
      this.showModal = !this.showModal;
    },
    out() {
      this.$store.commit('logOut');
      this.$router.push('/login');
    },
  },
};
</script>

<style></style>
