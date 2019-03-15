<template>

    <div>
        <home-header :city="city"></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :icon="iconList"></home-icons>
        <home-reommend :reommend="recommendList"></home-reommend>
        <home-weekend :weekend="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    import HomeIcons from './components/Icons'
    import HomeReommend from './components/Reommend'
    import HomeWeekend from './components/Weekend'
    import axios from 'axios'

    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            HomeIcons,
            HomeReommend,
            HomeWeekend
        },
        data() {
            return {
                city: '',
                swiperList: [],
                recommendList: [],
                iconList: [],
                weekendList: []
            }
        },
        methods: {
            getHomeInfo() {
                axios.get('/static/mock/index.json')
                    .then(this.getHomeInfoSuccess)
            },
            getHomeInfoSuccess(res) {
                res = res.data;
                if (res.ret && res.data) {
                    const data = res.data;
                    // this.city = data.hotCities[0].name;
                    this.swiperList = data.swiperList;
                    this.recommendList = data.recommendList;
                    this.iconList = data.iconList;
                    this.weekendList = data.weekendList;
                }
            }
        },
        //生命周期函数
        mounted() {
            this.getHomeInfo()
        }
    }
</script>

<style scoped>

</style>
