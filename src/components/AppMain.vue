<template>
    <div class="container">
        <form class="title" :class="{title_active: titleOnChange}" @submit.prevent="changeCategoryTitle">
            <input class="title__text" :class="{title__text_active: titleOnChange}" ref="title" v-model="newCategoryTitle" :disabled="!titleOnChange">
            <img src="@/assets/edit.png" alt="edit" class="title__edit" width="30px" @click.prevent="inputActive">
        </form>

        <TaskAdd @updateNewTaskTitle="addTask($event)"/>

        <TaskList :tasks="currentCategory.tasks" :complete="false" @update:tasks="updateCategory($event)"/>

        <TaskList :tasks="currentCategory.doneTasks" :complete="true" @update:doneTasks="updateCategory($event)"/>
    </div>
</template>

<style lang="sass">
    .title
        display: flex
        position: relative
        width: 100%
        justify-content: space-between
        align-items: flex-start
        margin-bottom: 35px

        &::after
            content: ''
            position: absolute
            width: 0
            height: 3px
            background-color: #fff
            bottom: 0
            left: 0
            transition: .3s
        &_active::after
            width: 80%

        &__text
            display: inline-block
            
            width: 80%
            color: #fff
            font-weight: 700
            font-size: 36px
            background-color: transparent
            border: none
            outline: none
            padding-left: 5px
            
        
        &__edit
            padding: 4px
            border-radius: 8px
            cursor: pointer

            &:hover
                background-color: #21212b
</style>

<script>
import TaskList from '@/components/TaskList.vue'
import TaskAdd from '@/components/TaskAdd.vue'

export default {
    components: {TaskList, TaskAdd},
    data() {
        return {
            titleOnChange: false,
            newCategoryTitle: this.categoryTitle,
        }
    },
    computed: {
        currentCategory() {
            return this.$store.state.categories.find(el => el.title === this.$route.params.category)
        },
        categoryTitle: {
            get: function() {
                return this.$route.params.category
            }, 
            set: function(title) {
                this.$store.commit('changeCategoryTitle', {newTitle: title, oldTitle: this.$route.params.category})
            }
        }, 
    },
    watch: {
        categoryTitle: function(title) {
            this.newCategoryTitle = title
        }
    },
    methods: {
        updateCategory(event) {
            if(event.complete) this.currentCategory.doneTasks = event.tasks
            else this.currentCategory.tasks = event.tasks

            this.$store.commit('updateTasks', this.currentCategory)
        },
        addTask(newTaskTitle) {
            this.$store.commit('addTask', {category: this.currentCategory, title: newTaskTitle})
        },
        changeCategoryTitle() {
            this.titleOnChange = false
            this.categoryTitle = this.newCategoryTitle
            this.$router.replace({name: 'main', params: {category: this.newCategoryTitle}})
        },
        inputActive() {
            this.titleOnChange = true
        }
    },
    created: function() {
        this.newCategoryTitle = this.categoryTitle
    }
}
</script>