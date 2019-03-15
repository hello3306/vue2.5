<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl"/>
                        <p class="icon-desc">{{item.desc}}</p>
                    </div>
                </div>

            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeIcons",
        props: {
            icon: Array
        },
        data() {
            return {
                swiperOption: {
                    autoplay: false,
                    pagination: '.swiper-pagination',
                    // loop: true
                },
            }
        },
        computed: {
            pages() {
                const pages = [];
                this.icon.forEach((item, index) => {
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

    .icons >>> .swiper-pagination-bullet-active
        background #00bcd4

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
                bottom .54rem
                box-sizing border-box
                padding .1rem

                .icon-img-content
                    display block
                    margin 0 auto
                    height 80%

                .icon-desc
                    position absolute
                    bottom 0
                    left 0
                    right 0
                    height .64rem
                    line-height .94rem
                    text-align center
                    color $darkTextColor
                    ellipsis()


</style>
