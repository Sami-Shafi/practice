<script>
    export default {
        name: "Footer",
    }
</script>

<template>
    <footer>
        <p>Copyright &copy; 2022</p>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<style scoped>
a {
    color: #333;
    margin: 0 7px;
}
footer {
    margin-top: 30px;
    text-align: center;
}
</style>