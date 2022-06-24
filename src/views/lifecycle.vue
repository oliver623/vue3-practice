<template>
  <div>{{ count }}</div>
  <Test v-for="(item, index) in data" :key="index" :item="item" @remove="remove"></Test>
</template>

<script setup>
import Test from "./testLifecycle.vue";
import {
  ref,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
} from "vue";

let count = ref(0);
const data = ref([
  {
    id: 1,
    title: "标题1",
  },
  {
    id: 2,
    title: "标题2",
  },
]);
console.log("setup");

setTimeout(() => {
  count.value++;
}, 1000);
onBeforeMount(() => {
  console.log("onBeforeMount");
});

onMounted(() => {
  console.log("onMounted");
});

onUpdated(() => {
  console.log("onUpdated");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
// watchEffect 永远在 onupdated之前执行，不管怎么设置 flush
watchEffect(
  () => {
    const a = count.value;
    console.log("watchEffect");
    console.log("a====", a);
  },
  {
    flush: "post", // post , pre(默认值)， 设置flush=post onBeforeUpdate 会在watchEffect之前执行,但是  onupdated 永远在 watchEffect之后执行
  }
);

const remove = (id) => {
  data.value = data.value.filter((item) => item.id !== id);
};
</script>

<style scoped></style>
