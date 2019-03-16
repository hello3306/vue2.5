<template>
    <div>
        <city-header></city-header>
        <city-search :cities="cities"></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handLeLetterChange"></city-alphabet>
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
        data() {
            return {
                cities: {},
                hotCities: [],
                letter: ''
            }
        },
        components: {
            CityAlphabet,
            CityList,
            CityHeader,
            CitySearch
        },
        methods: {
            getCityInfo() {
                axios.get('/static/mock/city.json').then(this.handleGetCityInfoSuccess)
            },
            handleGetCityInfoSuccess(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities
                }
            },
            handLeLetterChange(letter) {
                this.letter = letter
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>
