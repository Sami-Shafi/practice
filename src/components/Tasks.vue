<script>
import Task from "./Task.vue";

export default {
	name: "Tasks",
	props: { tasks: Array },
	components: {
		Task,
	},
	emits: ["delete-task", "toggle-reminder"],
};
</script>

<template>
	<div class="task-wrap">
		<div :key="task.id" v-for="task in tasks">
            <Task
                :task="task"
                @delete-task="$emit('delete-task', task.id)"
                @toggle-reminder="$emit('toggle-reminder', task.id)"
            />
		</div>
	</div>
</template>

<style></style>
