<template>

    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-reommend></home-reommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeReommend from './components/Reommend'
    import HomeWeekend from './components/Weekend'
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeReommend,
            HomeWeekend
        }
    }
</script>

<style scoped>

</style>
