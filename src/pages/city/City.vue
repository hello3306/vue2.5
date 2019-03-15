<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from "./component/Header";
    import CitySearch from "./component/Search";
    import CityList from "./component/List";
    import CityAlphabet from "./component/Alphabet";


    export default {
        name: "City",
        data () {
            return{
                cities:{},
                hotCities:[]
            }
        },
        components: {
            CityAlphabet,
            CityList,
            CityHeader,
            CitySearch
        },
        methods:{
            getCityInfo (){
                axios.get('/static/mock/city.json').then(this.handleGetCityInfoSuccess)
            },
            handleGetCityInfoSuccess (res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data;
                    this.cities=data.cities;
                    this.hotCities=data.hotCities
                }
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>
