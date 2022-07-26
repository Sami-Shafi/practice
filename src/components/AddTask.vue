<script>
export default {
	name: "AddTask",
	data() {
		return {
			name: "",
			day: "",
			reminder: false,
		};
	},
	methods: {
		onSubmit(e) {
			e.preventDefault();

			if (!this.name) {
				alert("Please name your task!");
				return;
			}

            let newTask = {
                id: Math.floor(Math.random() * 10000),
                text: this.name,
                day: this.day,
                reminder: this.reminder,
            }

            this.$emit('add-task', newTask);

            this.name = ""
            this.day = ""
            this.reminder = false
		},
	},
};
</script>

<template>
	<form @submit="onSubmit" class="add-form">
		<div class="form-control">
			<label>Task</label>
			<input
				type="text"
				v-model="name"
				name="text"
				placeholder="Add Task"
			/>
		</div>
		<div class="form-control">
			<label>Day & Time</label>
			<input
				type="text"
				v-model="day"
				name="day"
				placeholder="Add Day & Time"
			/>
		</div>
		<div class="form-control form-control-check">
			<label>Set Reminder</label>
			<input type="checkbox" v-model="reminder" name="reminder" />
		</div>

		<input type="submit" value="Save Task" class="btn btn-block" />
	</form>
</template>

<style scoped>
.add-form {
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.form-control {
	margin: 20px 0;
	width: 100%;
}
.form-control label {
	display: block;
	margin-bottom: 7px;
}
.form-control input {
	width: 100%;
	height: 40px;
	padding: 3px 7px;
	font-size: 17px;
}
.form-control-check {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.form-control-check label {
	margin-bottom: 0;
}
.form-control-check input {
	height: 20px;
	width: 5%;
}
</style>
