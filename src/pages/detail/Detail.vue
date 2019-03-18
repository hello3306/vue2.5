<template>
    <div>
        <banner></banner>
        <detail-header></detail-header>
        <div class="content"></div>
    </div>
</template>

<script>
    import Banner from './component/Banner'
    import DetailHeader from "./component/Header";

    export default {
        name: "Detail",
        components: {DetailHeader, Banner},
    }
</script>

<style lang="stylus" scoped>
    .content
        height .50rem


</style>
