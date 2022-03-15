<template>
    <div class="tasks">
        <h2 class="tasks__title">{{ title }} - {{ tasks.length }}</h2>
        <TaskItem :task="task" v-for="task in tasks" :key="task.title" @update:task="updateTasks($event, tasks)" @deleteTask="deleteTask($event, tasks)"/>
    </div>

</template>

<style lang="sass">
    .tasks__title 
        color: #fff
        font-size: 20px
        font-weight: 500
        margin-bottom: 20px
</style>

<script>
import TaskItem from '@/components/TaskItem.vue'
export default {
    components: {TaskItem},
    props: ['tasks', 'complete'],
    computed: {
        title() {
            if(this.complete) return 'Completed'
            else return 'Tasks'
        }
    },
    methods: {
        updateTasks(task, tasks) {
            this.$emit('update:tasks', tasks.map(el => {
                if(el.title === task.title) return task;
                else return el
            }))
        },
        deleteTask(task, tasks) {
            const index = this.tasks.findIndex(el => el.title === task .title)
            tasks.splice(index, 1)
            // console.log(tasks)
            if(this.complete) this.$emit('update:doneTasks', {tasks: tasks, complete: this.complete})
            else this.$emit('update:tasks', {tasks: tasks, complete: this.complete})
        },
    },
    
}
</script>
