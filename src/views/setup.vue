<template>
  <div>{{ count }}</div>
</template>

<script>
import {
  watch,
  onMounted,
  computed,
  ref,
  reactive,
  toRefs,
  getCurrentInstance,
} from "vue";
export default {
  name: "Setup",
  components: {},
  setup(props, ctx) {
    console.log("setup");
    console.log("props====", props);
    console.log("ctx====", ctx);
    // const state = reactive({
    //   count: 0,
    // });
    const count = ref(0);
    console.log(count.value);
    const instance = getCurrentInstance();
    console.log("instance====", instance);
    console.log("instance.ctx.utils====", instance.ctx.utils);
    return {
      //   ...toRefs(state),
      count,
    };
  },
};
</script>

<style scoped></style>
