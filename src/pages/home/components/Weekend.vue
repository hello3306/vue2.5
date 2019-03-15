<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul v-for="item of weekend" :key="item.id">
            <li class="item border-bottom">
                <div class="item-img-wrapper">
                    <img class="item-img"
                         :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeWeekend",
        props: {
            weekend: Array
        },

    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/style/mixins.styl"
    .recommend-title
        margin-top .2rem
        line-height .8rem
        background #eee
        text-indent .2rem

    .item-img-wrapper
        height 0
        padding-bottom 37%

        .item-img
            width 100%

    .item-info
        padding .2rem

        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()

        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()


</style>
