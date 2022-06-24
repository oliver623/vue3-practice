<template>
  <button class="my-button"><slot></slot></button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style>
.my-button {
  border: 1px solid orange;
}
</style>
