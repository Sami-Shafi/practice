<script>
import AddTask from "../components/AddTask.vue";
import Tasks from "../components/Tasks.vue";

export default {
	name: "Home",
	components: { Tasks, AddTask },
	props: { showForm: Boolean },
	data() {
		return {
			tasks: [],
		};
	},

	methods: {
		async deleteTask(id) {
			if (confirm("Are you sure?")) {
				const res = await fetch(`/api/tasks/${id}`, {
					method: "DELETE",
				});

				res.status === 200
					? (this.tasks = this.tasks.filter((task) => task.id !== id))
					: alert("Server Error!");
			}
		},

		async toggleReminder(id) {
			const selectedTask = await this.fetchSingleWork(id);
			const updTask = {
				...selectedTask,
				reminder: !selectedTask.reminder,
			};

			const res = await fetch(`api/tasks/${id}`, {
				method: "PUT",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(updTask),
			});

			const data = await res.json();

			this.tasks = this.tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			);
		},
		async addTask(task) {
			const res = await fetch("/api/tasks", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify(task),
			});

			const data = await res.json();

			this.tasks = [...this.tasks, data];
		},

		async fetchSingleWork(id) {
			const res = await fetch(`/api/tasks/${id}`);
			const data = await res.json();
			return data;
		},

		async fetchWorks() {
			const res = await fetch("/api/tasks");
			const data = await res.json();
			return data;
		},
	},

	async created() {
		this.tasks = await this.fetchWorks();
	},
};
</script>

<template>
	<!-- <h2>Home</h2> -->
	<transition name="fade">
		<div v-if="showForm">
			<AddTask @add-task="addTask" />
		</div>
	</transition>

	<Tasks
		:tasks="tasks"
		@delete-task="deleteTask"
		@toggle-reminder="toggleReminder"
	/>
</template>

<style></style>
