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

<style></style>
