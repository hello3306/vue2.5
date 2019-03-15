<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                        <p class="icon-desc">{{item.title}}</p>
                    </div>
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    // loop: true
                },
                iconList: [
                    {
                        id: '0001',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                        title: '景点门票'
                    },
                    {
                        id: '0002',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                        title: "一日游"
                    },
                    {
                        id: '0003',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ee/5114069893722102.png',
                        title: "黄果树"
                    },
                    {
                        id: '0004',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                        title: "贵阳必游"
                    },
                    {
                        id: '0005',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
                        title: "室内场馆"
                    },
                    {
                        id: '0006',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/87/20656da0ac042002.png',
                        title: "织金洞半价"
                    },
                    {
                        id: '0007',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
                        title: "泡温泉"
                    },
                    {
                        id: '0008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                        title: "演出"
                    },
                    {
                        id: '0008',
                        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                        title: "演出"
                    },


                ],
            }
        },
        computed: {
            pages() {
                const pages = [];
                this.iconList.forEach((item, index) => {
                    const page = Math.floor(index / 8);
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)
                });
                return pages
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/style/varibles.styl"
    @import "~@/assets/style/mixins.styl"
<<<<<<< HEAD

=======
>>>>>>> origin/index-recommend
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
    .icons
        margin-top .1rem

        .icon
            position relative
            overflow hidden
            float left
            width 25%
            height 0
            /*background red*/
            padding-bottom 25%

            .icon-img
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem

                .icon-img-content
                    display block
                    margin 0 auto
                    height 100%

                .icon-desc
                    position absolute
                    bottom 0
                    left 0
                    right 0
                    height .44rem
                    line-height .44rem
                    text-align center
                    color $darkTextColor
                    ellipsis()



</style>
