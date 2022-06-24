<template>
	<div>
    <div>{{x}}, {{y}}</div>
		<div>
			<h1 @click="add">{{ count }}</h1>
		</div>

		<div>
			<input type="text" v-model="title" @keydown.enter="addTodo" /> <button v-if="active < all" @click="clear">清理</button>
			<ul v-if="todos.length">
				<li v-for="todo in todos">
					<input type="checkbox" v-model="todo.done" /> <span :class="{ done: todo.done }"> {{ todo.title }}</span>
				</li>
			</ul>
			<div v-else>暂无数据</div>
			<div>
				全选<input type="checkbox" v-model="allDone" /> <span> {{ active }} / {{ all }} </span>
			</div>
		</div>
	</div>
</template>

<script setup>

import tools from '../utils/index.js'
import mouse from '../utils/mouse.js'
import { ref, computed } from 'vue';
let { title, todos, addTodo, clear, active, all, allDone } = tools.useTodos();

let {x,y} = mouse.useMouse()
let count = ref(1);
let color = ref(`red`)
function add() {
	count.value++;
  console.log('color====', color.value)
  color.value = `#${Math.ceil(Math.random()*1000000)}`
}
</script>

<style scoped >
h1 {
	color: v-bind(color);
}
</style>
