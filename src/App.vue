<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: { Header, Footer },

	data() {
		return {
			showForm: false,
		};
	},

	methods: {
		toggleForm() {
			this.showForm = !this.showForm;
		},
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

		<router-view :showForm="showForm"></router-view>

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
