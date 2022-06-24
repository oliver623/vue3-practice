<template>
  <input type="text" :placeholder="placeholderText" class="my-input" />
</template>

<script>
export default {
  name: "MyInput",
  props: {
    placeholderText: {
      type: String,
      default: "This is my input.",
    },
  },
};
</script>

<style>
.my-input {
  border: 1px solid purple;
  padding: 0.5rem;
  border-radius: 0.25rem;
  width: 200px;
}
</style>
