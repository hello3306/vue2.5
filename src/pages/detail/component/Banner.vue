<template>
    <div>
        <div class="banner">
            <img class="banner-img"
                 src="http://img1.qunarzz.com/sight/p0/1501/b5/b536539824a83cb3.water.jpg_710x420_f9ffc62d.jpg"/>
            <div class="banner-info">
                <div class="banner-title">故宫(AAAAA景区)</div>
                <div class="banner-number banner-icon"><span class="iconfont arrow-icon">&#xe7b3;</span> 33</div>
            </div>
        </div>
        <common-gallary></common-gallary>
    </div>
</template>

<script>
    import CommonGallary from '../../../common/gallary/Gallary'

    export default {
        name: "Banner",
        components: {CommonGallary},

    }
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden;
        height 0
        padding-bottom 55%

        .banner-img
            width 100%

        .banner-info
            display flex
            position absolute
            left 0
            right 0
            bottom 0
            line-height .6rem
            color #fff
            background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))

            .banner-title
                flex 1
                font-size .32rem
                padding 0 .2rem

            .banner-number
                margin-top .14rem
                padding 0 .4rem
                line-height .38rem
                height .38rem
                border-radius .2rem
                background rgba(0, 0, 0, .8)
                font-size .24rem

                .banner-icon
                    font-size .24rem


</style>
