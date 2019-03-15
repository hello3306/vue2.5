<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul v-for="item of recommendList" :key="item.id">
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
        data() {
            return {
                recommendList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/ca/582eeac2b66cbd.jpg_r_640x214_7bd58c80.jpg',
                        title: '贵阳泡汤圣地',
                        desc: '来贵州你还不泡一次温泉吗？这里有天然温泉池，各种温泉泡法让你的皮肤不再干痒'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/89/8ca757afa0c16d.jpg_r_640x214_9b632be7.jpg',
                        title: '亲子休闲玩乐',
                        desc: '黔东南的美景美色让你看不够，这里有众多少数民族，奇美的自然景观和多彩的人文景观'
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/5c/18f146e252f8fa.jpg_r_640x214_a3728b5b.jpg',
                        title: '贵阳必游',
                        desc: '山水溶洞，无不体现这个城市灵秀可人'
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/70/ec578f22875da3.jpg_r_640x214_890e7547.jpg',
                        title: '探访贵阳古迹',
                        desc: '“探访贵阳古迹，感受贵阳文化。'
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

    .item-img-wrapper
        height 0
        padding-bottom 36.9%

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
