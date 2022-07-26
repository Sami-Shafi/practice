<script>
export default {
	name: "Button",
	props: { text: String, bgColor: String,},
	methods: {
		onClick() {
			this.$emit("btn-click");
		},
	},
};
</script>

<template>
	<button class="btn" :style="{ background: bgColor }" @click="onClick()">
		{{ text }}
	</button>
</template>

<style></style>
