<script>
import Button from "./Button.vue";
export default {
	name: "Header",
	props: { title: String, formShown: Boolean},
	components: {
		Button,
	},
};
</script>

<template>
	<header>
		<h1>{{ title }}</h1>
		<Button
			:text="formShown ? 'Close' : 'Add'"
			bgColor="navy"
			@btn-click="$emit('toggle-Form')"
		/>
	</header>
</template>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;
}
</style>
