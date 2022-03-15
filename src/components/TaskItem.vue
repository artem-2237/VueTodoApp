<template>
    <div class="item">
        <label :for="task.title" class="item__check">
            <input type="checkbox" :id="task.title" @click="updateTask(task)" :checked="task.done" >
            <img src="@/assets/checked.png" alt="check" class="item__check_checked">
        </label>
        <span class="item__title" :class="{item__title_done: task.done}">{{ task.title }}</span>
        <button class="item__delete" @click="$emit('deleteTask', task)">×</button>
    </div>    
</template>

<style lang="sass">
    .item 
        display: flex
        flex-wrap: wrap
        position: relative
        align-items: center
        background-color: #21212b
        width: 100%
        height: 70px
        border-radius: 21px
        padding: 13px
        margin-bottom: 10px

        &__check
            display: block
            width: 30px
            height: 30px
            border: 3px solid #f176a1
            border-radius: 10px
            margin-right: 15px
            cursor: pointer

            input 
                display: none
                &:checked + .item__check_checked
                    display: inline-block

            &_checked
                display: none
                width: 25px
                height: 25px
                border-radius: 5px
                background-color: #f176a1    
                padding: 4px
        
        &__title
            font-size: 18px
            color: #fff
            font-weight: 400


            &_done
                text-decoration: line-through
        
        &__delete
            display: flex
            align-items: center
            justify-content: center
            position: absolute
            width: 20px 
            height: 20px
            border: none
            outline: none
            border-radius: 5px
            background-color: transparent
            top: 12px
            right: 15px
            color: #aaa
            font-size: 24px
            cursor: pointer
            &:hover
                background-color: #ffffff11
                    
</style>

<script>
export default {
    props: ['task'],
    methods: {
        updateTask(task) {
            task.done = !task.done
            if(task.done) {
                this.$store.commit('taskDone', {
                    categoryName: this.$route.params.category,
                    task: task,
                    done: task.done
                })
            } else {
                this.$store.commit('taskDone', {
                    categoryName: this.$route.params.category,
                    task: task,
                    done: task.done
                })
            }
            // this.$emit('update:task', task)
        }
    }
}
</script>
