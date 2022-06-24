<template>
  <div>{{ item.title }}</div>
  <button @click="remove(item.id)">删除</button>
</template>

<script>
export default {
  name: "testLifecycle",
  props: {
    item: Object,
  },
  emits: ["remove"],
  setup(props, ctx) {
    const remove = (id) => {
      ctx.emit("remove", id);
    };
    return remove;
  },
};
</script>

<style scoped></style>
