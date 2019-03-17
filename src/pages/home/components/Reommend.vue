<template>
    <div>
        <div class="recommend-title">热门榜单</div>
        <ul v-for="item of reommend" :key="item.id">

            <router-link tag="li" :to="'/detail/'+item.id"
                         class="item border-bottom">

                <img class="item-img"
                     :src="item.imgUrl"/>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>

            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeReommend",
        props: {
            reommend: Array
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

    .item
        display flex
        height 1.9rem
        overflow hidden

        .item-img
            width 2rem
            height 2rem
            padding .1rem

        .item-info
            flex 1
            min-width 0
            padding .1rem

            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()

            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()

            .item-button
                margin-top .2rem
                color #FFF
                background #ff9300
                padding 0 .2rem
                border-radius .06rem


</style>
