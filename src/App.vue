<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
	name: "App",
	components: { Header, Tasks, AddTask, Footer },

	data() {
		return {
			tasks: [],
			showForm: false,
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

		toggleForm() {
			this.showForm = !this.showForm;
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
	<div class="container">
		<Header
			title="Task Tracker"
			:formShown="showForm"
			@toggle-Form="toggleForm"
		/>
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
		<Footer />
	</div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}
body {
	font-family: "Poppins", sans-serif;
}
.container {
	max-width: 500px;
	margin: 30px auto;
	overflow: auto;
	min-height: 300px;
	border: 1px solid steelblue;
	padding: 30px;
	border-radius: 5px;
}
.mt-2 {
	margin-top: 20px;
}
.btn {
	display: inline-block;
	background: navy;
	color: #fff;
	border: none;
	padding: 10px 20px;
	margin: 5px;
	border-radius: 5px;
	cursor: pointer;
	text-decoration: none;
	font-size: 15px;
	font-family: inherit;
}
.btn:focus {
	outline: none;
}
.btn:active {
	transform: scale(0.98);
}
.btn-block {
	display: block;
	width: 100%;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.6s ease;
}
.fade-leave-active {
	transition: 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
