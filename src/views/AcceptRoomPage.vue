<template>
  <div>
    <h1>
      <i class="far fa-check-circle yes"></i>
    </h1>
    <h2>초대를 수락하시겠습니까?</h2>
    <button @click="acceptInvite">OK</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: null,
    };
  },
  created() {
    this.token = this.$route.params.token;
    this.$store.dispatch('checkToken', this.token);
  },
  methods: {
    async acceptInvite() {
      await this.$store.dispatch('RoomMember', this.$store.getters.TokenId);
      alert('invitation succeed');
      this.$router.push(`/roomhome/${this.$store.getters.TokenId}`);
    },
  },
};
</script>

<style></style>
