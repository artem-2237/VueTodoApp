<template>
    <nav id="nav" class="nav" v-bind:class="{ nav_active: menuOpenned }">
        <button class="nav__btn" @click="menuOpen">
            <img src="@/assets/nav/menu.png" alt="menu" width="35px" height="35px">
        </button>

        <NavItem :item="item" v-for="item in $store.state.categories" :key="item.title"/>

        <form class="nav__add" @submit.prevent="addCategories">
            <button type="submit" class="nav__add_btn">+</button>
            <div action="#" class="nav__add_inputs">
                <input type="text" class="nav__add_input" v-model="newCategoryTitle">
                <div class="nav__add_colors">
                    <label for="#fc76a1">
                        <input type="radio" value="#fc76a1" v-model="newCategoryColor" id="#fc76a1" name="color">
                        <div class="color_radio"></div>
                    </label>
                    <label for="#70c4bf">
                        <input type="radio" value="#70c4bf" v-model="newCategoryColor" id="#70c4bf" name="color">
                        <div class="color_radio"></div>
                    </label>
                    <label for="#ae68e6">
                        <input type="radio" value="#ae68e6" v-model="newCategoryColor" id="#ae68e6" name="color">    
                        <div class="color_radio"></div>
                    </label>                
                </div>
                <div class="nav__add_images">
                    <label for="book">
                        <input type="radio" value="book" v-model="newCategoryImage" id="book" name="image">
                        <div class="image_radio"></div>
                        <img src="@/assets/nav/book.png" alt="book" width="20px" height="20px">
                    </label>
                   <label for="user">
                        <input type="radio" value="user" v-model="newCategoryImage" id="user" name="image">
                        <div class="image_radio"></div>
                        <img src="@/assets/nav/user.png" alt="user" width="20px" height="20px">
                    </label>
                    <label for="brush">
                        <input type="radio" value="brush" v-model="newCategoryImage" id="brush" name="image">
                        <div class="image_radio"></div>
                        <img src="@/assets/nav/brush.png" alt="brush" width="20px" height="20px">
                    </label>
                </div>
            </div>
        </form>
        <span class="nav__error" v-if="addCategoryError.status">{{ addCategoryError.msg }}</span>
    </nav>
</template>

<style lang="sass">

    .nav
        position: fixed
        top: 0
        left: 0
        width: 80px
        height: 100%
        background-color: #21212b
        transition: .3s all
        padding-top: 15px
        overflow: hidden
        z-index: 1

        &_active
            width: 350px

        &__btn
            background-color: transparent
            border: none
            outline: none
            width: 80px
            height: 50px
            cursor: pointer
            opacity: 0.6
        
        &__add
            display: flex
            align-items: center
            width: 350px
            padding: 10px 0 10px 10px
            margin-top: 35px
            transition: .2s
            &:hover
                background-color: #272732

            &_inputs
                display: flex
                flex-wrap: wrap
                width: 265px
                padding-right: 25px
                justify-content: space-between
                align-items: center

            &_btn
                width: 60px
                height: 60px
                line-height: 50px
                text-align: center
                color: #fff
                font-size: 34px
                font-weight: 500
                border: none
                outline: none
                border-radius: 15px
                background: linear-gradient(45deg, #ae68e6, #fe9782)
                margin-right: 25px
                cursor: pointer

            &_input
                width: 100%
                margin-bottom: 10px
                outline: none
                height: 35px
                border-radius: 20px
                border: 1px solid #ffffff11
                color: #fff
                font-size: 20px
                padding: 0 20px
                background-color: transparent

            &_colors
                display: flex
                input
                    display: none
                    
                    &:checked + .color_radio
                        background: linear-gradient(0deg, #aaa, #ddd)
                        opacity: 0.9
                        
                .color_radio
                    width: 12px
                    height: 12px
                    border-radius: 50%
                    border: 1px solid #dddddd77
                    background-color: transparent

                label
                    display: flex
                    align-items: center
                    justify-content: center
                    width: 20px
                    height: 20px
                    border-radius: 50%
                    border: 1px solid #dddddd77
                    background-color: #ccc
                    margin-right: 10px
                    cursor: pointer

                    &:nth-child(1) 
                        background-color: #fc76a1
                    &:nth-child(2) 
                        background-color: #70c4bf
                    &:nth-child(3) 
                        background-color: #ae68e6
            &_images
                display: flex

                input
                    display: none

                    &:checked + .image_radio
                        border: 3px solid #fff    
                
                label 
                    position: relative
                    display: flex
                    align-items: center
                    justify-content: center
                    width: 30px 
                    height: 30px
                    background-color: #ccc
                    border-radius: 10px
                    margin-right: 13px
                    cursor: pointer

                    &:nth-child(1) 
                        background-color: #fc76a1
                    &:nth-child(2) 
                        background-color: #70c4bf
                    &:nth-child(3) 
                        background-color: #ae68e6
                    
                    .image_radio
                        width: 100%
                        height: 100%
                        border-radius: 10px
                        position: absolute
                        border: none
        &__error
            display: block
            width: 350px
            padding: 0 10px 
            margin-top: 25px
            color: #ff5357
</style>

<script>
import NavItem from '@/components/NavItem.vue'

export default {
    components: {NavItem},
    props: ['currentCategory'],
    data() {
        return {
            menuOpenned: false,
            newCategoryTitle: '',
            newCategoryColor: '#fc76a1',
            newCategoryImage: 'book',
            addCategoryError: {
                status: false,
                msg: ''
            }
        }
    },
    methods: {
        menuOpen() {
            if (this.menuOpenned) this.menuOpenned = false
            else this.menuOpenned = true
        },
        addCategories() {
            this.addCategoryError.status = false
            if(this.menuOpenned) {
                if(this.newCategoryTitle === '') this.addCategoryError = {
                    status: true,
                    msg: 'Введите название категории'
                }
                if(this.newCategoryColor === '') this.addCategoryError = {
                    status: true,
                    msg: 'Выберите цвет категории'
                }
                if(this.newCategoryImage === '') this.addCategoryError = {
                    status: true,
                    msg: 'Выберите иконку категории'
                }
                this.$store.state.categories.forEach(el => {
                    if(el.title === this.newCategoryTitle) {
                        this.addCategoryError = {
                            status: true,
                            msg: 'Категория с таким именем уже существует'
                        }
                    }
                })
                if(!this.addCategoryError.status){
                    this.$store.commit('addCategory', {title: this.newCategoryTitle, color: this.newCategoryColor, image: this.newCategoryImage})
                    this.$router.push({name: 'main', params: {category: this.newCategoryTitle}})
                    this.newCategoryTitle = ''
                    this.newCategoryColor = ''
                    this.newCategoryImage = ''
                    this.menuOpen()
                }
            }
            else this.menuOpen()
        }
    }
}
</script>
