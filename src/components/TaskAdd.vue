<template>
    <div class="task-add">
        <form class="task-add__form" @submit="updateNewTaskTitle()">
            <button type="submit" class="task-add__button">+</button>
            <input type="text" class="task-add__input" v-model="newTaskTitle" placeholder="Add a task">
        </form>
        <span class="task-add__error" v-show="addError">Введите название задачи</span>
    </div>
</template>

<style lang="sass">
    .task-add
        margin-bottom: 50px

        &__form
            width: 100%
            height: 55px
            display: flex
            align-items: center
            border: 2px solid #21212b
            border-radius: 17px
            padding: 10px            

        &__button
            width: 30px
            height: 30px
            border-radius: 10px
            border: none
            outline: none
            background-color: #f176a1
            font-size: 24px
            font-weight: 500
            margin-right: 15px
            cursor: pointer

        &__input
            width: 80%
            background-color: transparent
            border: none
            outline: none
            font-size: 18px
            color: #fff
        
        &__error
            display: inline-block
            margin-top: 10px
            color: #ff5357
</style>

<script>
export default {
    data() {
        return {
            newTaskTitle: '',
            addError: false
        }
    },
    methods: {
        updateNewTaskTitle() {
            this.addError = false
            if(this.newTaskTitle === '') {
                this.addError = true
                return
            }
            this.$emit('updateNewTaskTitle', this.newTaskTitle)
            this.newTaskTitle = ''
        }
    }
}
</script>
