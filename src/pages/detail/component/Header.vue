<template>
    <div>
        <router-link
                v-show="showAbs"
                class="header-abs header-abs-back" tag="div" to="/">
            <div class="iconfont back-icon">&#xe624;</div>
        </router-link>
        <div class="header-fixed"
             v-show="!showAbs"
             :style="opacityStyle">
            <router-link class=" header-fixed-back" tag="div" to="/">
                <div class="iconfont back-icon">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
    export default {
        name: "detailHeader",
        data() {
            return {
                showAbs: true,
                opacityStyle: 0
            }
        },
        activated() {
            window.addEventListener('scroll', this.handleScroll);
        },
        deactivated() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        methods: {
            handleScroll() {
                const top = document.documentElement.scrolLTop;
                if (top > 60) {
                    let opacity = top / 140;
                    opacity = opacity > 1 ? 1 : opacity;
                    this.opacityStyle = {opacity};
                    this.showAbs = false
                } else {
                    this.showAbs = true
                }
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~@/assets/style/varibles.styl"
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        line-height .8rem
        border-radius .4rem
        // background rgba(0, 0, 0, .8)

        .header-abs-back
            color #fff
            font-size .4rem

    .header-fixed
        position fixed
        top: 0
        left 0
        right 0
        z-index: 2
        height $headerHeight
        line-height $headerHeight
        text-align center
        color #fff
        background $bgColor
        font-size .32rem

        .header-fixed-back
            position absolute
            width .64rem
            text-align center
            font-size .4rem
            color #fff


</style>
