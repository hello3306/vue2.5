<template>
    <div>
        <div class="recommend-title">热销</div>
        <ul v-for="item of recommendList" :key="item.id">
            <li class="item border-bottom">

                <img class="item-img"
                     :src="item.imgUrl"/>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HomeReommend",
        data() {
            return {
                recommendList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/a2/a23b572c56a6a637a3.water.jpg_200x200_2560b756.jpg',
                        title: '贵州万象温泉',
                        desc: '🔥好评如潮，小伙伴热推景点~'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/2d/2d6912a2802b012.water.jpg_200x200_37ffff04.jpg',
                        title: '《多彩贵州风》演出',
                        desc: '一场赏心悦目享誉全国的视听盛宴'
                    },
                    {
                        id:'0003',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1803/c7/c7a0d45450ff744da3.img.jpg_200x200_0fded637.jpg',
                        title:'天河潭',
                        desc:'👍小伙伴们都收藏了，去看看吧~'
                    },
                    {
                        id:'0004',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/1705/ff/ff597da4910bcd42a3.img.jpg_200x200_2fcd9979.jpg',
                        title:'观山湖生态温泉水上乐园',
                        desc:'“三洗之地”（洗肺，洗心，洗身）'
                    },
                    {
                        id:'0005',
                        imgUrl:'http://img1.qunarzz.com/sight/p0/201403/24/1dc9749ac146080f3386d279b70153d7.jpg_200x200_0bf66019.jpg',
                        title:'红枫湖',
                        desc:''
                    },

                ]
            }
        }
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
