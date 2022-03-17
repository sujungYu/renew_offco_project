<template>
  <div>
    <h1>INVITE</h1>
    <input
      v-model="inviteurl"
      placeholder="해당 링크로 초대하세요."
      type="text"
    />
    <button @click="createInviteToken">
      click&nbsp;<i class="fas fa-link"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: null,
      inviteurl: '',
    };
  },
  computed: {
    invitetoken() {
      return this.token;
    },
  },
  watch: {
    invitetoken(val) {
      this.inviteurl = `http://localhost:8080/roomhome/n/${val}`;
    },
  },
  methods: {
    createInviteToken() {
      this.token =
        Math.random()
          .toString(36)
          .substring(2, 15) +
        Math.random()
          .toString(36)
          .substring(2, 15);
      this.$store.dispatch('inviteToken', this.token);
    },
  },
};
</script>

<style></style>
