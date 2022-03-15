<template>
    <router-link :to="{name: 'main', params: {category: item.title}}" tag="div" class="nav__item" :class="{nav__item_active: $route.params.category === item.title}">
        <div class="nav__item_img" :style="{backgroundColor: item.color}">
            <img :src="require(`@/assets/nav/${item.img}.png`)" width="30px" height="30px">
        </div>
        <span class="nav__item_text">{{ item.title }}</span>
    </router-link>
</template>

<style lang="sass">
    .nav
        &__item
            display: flex
            align-items: center
            width: 350px
            margin-top: 20px
            padding: 15px 0 15px 15px
            cursor: pointer
            transition: .2s
            &:hover
                background-color: #272732
            &_active
                background-color: #272732
            &_img
                display: flex
                justify-content: center
                align-items: center
                width: 50px
                height: 50px
                border-radius: 10px
                margin-right: 30px

            &_text
                font-size: 28px
                color: #fff
                font-weight: 500
</style>

<script>
export default {
    props: ['item'],
}
</script>
