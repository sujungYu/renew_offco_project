<template>
  <div>
    <tool-bar></tool-bar>
    <room-home></room-home>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import RoomHome from '@/components/RoomHome.vue';
export default {
  components: {
    RoomHome,
    ToolBar,
  },
};
</script>

<style>
a {
  color: rgb(57, 62, 70);
  text-decoration: none;
}
a.router-link-exact-active {
  color: rgb(255, 134, 94);
}
</style>
