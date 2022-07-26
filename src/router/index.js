import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
	{
		path: "/about",
		name: "About",
		component: About,
	},
    {
		path: "/",
		name: "Home",
		component: Home,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;
