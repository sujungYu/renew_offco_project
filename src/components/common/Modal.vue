<template>
  <div class="modal-container" :class="{ active: true }">
    <div class="overlay" @click="$emit('close')"></div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-container,
.overlay {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.overlay {
  opacity: 0.5;
  background-color: black;
}
.content {
  position: relative;
  max-width: 88vw;
  margin: auto;
  margin-top: 8vh;
  padding-top: 2vh;
  background-color: rgb(254, 249, 239);
  border-radius: 15px;
  min-height: 40vh;
  z-index: 10;
  opacity: 1;
}
</style>
