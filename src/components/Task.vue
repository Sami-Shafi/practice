<script>
export default {
	name: "Task",
	props: {
		task: Object,
	},
	methods: {},
};
</script>

<template>
	<div
		:class="[`${task.reminder ? 'reminder' : ''}`, 'task', 'mt-2']"
		@dblclick="$emit('toggle-reminder', task.id)"
	>
		<div>
			<h2>{{ task.text }}</h2>
			<p>{{ task.day }}</p>
		</div>
		<i class="fas fa-times" @click="$emit('delete-task', task.id)"></i>
	</div>
</template>

<style scoped>
.task {
	background-color: #f2f2f2;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.task h2 {
	font-size: 1.2em;
}

.fas {
	margin-right: 10px;
	font-size: 24px;
	cursor: pointer;
}

.task.reminder {
	border-left: 5px solid navy;
}
</style>
