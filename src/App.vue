<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <Home></Home>
    </div>
</template>

<script>
    // import HelloWorld from './components/HelloWorld.vue'
    import Home from './pages/home/home.vue'

    export default {
        name: 'app',
        components: {
            Home
        }
    }
</script>

<style>

</style>
