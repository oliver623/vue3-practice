<template>
	<div>
        <h1 @click="toggle">click</h1>
    </div>
</template>

<script setup>
import { reactive, computed, watchEffect, ref } from 'vue';
// let getDouble = n=>n*2
// let obj = {}
// let count = 1
// let double = getDouble(count)
// Object.defineProperty(obj,'count',{
//     get(){
//         return count
//     },
//     set(val){
//         count = val
//         double = getDouble(val)
//     }
// })
// console.log(double)  // 打印2
// obj.count = 2
// console.log(double) // 打印4  有种自动变化的感觉
// ---------------------------------------------------------------------------------------------------------------------

// let proxy = new Proxy(obj,{
//     get : function (target,prop) {
//         return target[prop]
//     },
//     set : function (target,prop,value) {
//         target[prop] = value;
//         if(prop==='count'){
//             double = getDouble(value)
//         }
//     },
//     deleteProperty(target,prop){
//         delete target[prop]
//         if(prop==='count'){
//             double = NaN
//         }
//     }
// })
// console.log(obj.count,double)
// proxy.count = 2
// console.log(obj.count,double)
// delete proxy.count
// // 删除属性后，我们打印log时，输出的结果就会是 undefined NaN
// console.log(obj.count,double)

// ---------------------------------------------------------------------------------------------------------------------

// let obj = reactive({ count: 1 });
// let double = computed(() => obj.count * 2);
// obj.count = 2;
// watchEffect(() => {
// 	console.log('数据被修改了', obj.count, double.value);
// });

// ---------------------------------------------------------------------------------------------------------------------

// let getDouble = n => n * 2
// let _value = 1
// let double = getDouble(_value)
// let count = {
//     get value() { return _value },
// set value(val) { _value = val double = getDouble(_value) }}
// console.log(count.value,double)
// count.value = 2
// console.log(count.value,double)

// ---------------------------------------------------------------------------------------------------------------------

// let title = ref("");
// let todos = ref(JSON.parse(localStorage.getItem('todos')||'[]'));
// watchEffect(()=>{
//     localStorage.setItem('todos',JSON.stringify(todos.value))
// })
// function addTodo() {
//   todos.value.push({
//     title: title.value,
//     done: false,
//   });
//   title.value = "";
// }
// ---------------------------------------------------------------------------------------------------------------------
import { useFullscreen } from '@vueuse/core';
const { isFullscreen, enter, exit, toggle } = useFullscreen();

// ---------------------------------------------------------------------------------------------------------------------
</script>

<style scoped></style>
