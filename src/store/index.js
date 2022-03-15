import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {title: 'Personal', color: '#70c4bf', img: 'user', tasks: [], doneTasks:[]},
  ],
  },
  mutations: {
    loadCategoriesData(state) {
      if(localStorage.getItem('categories')) state.categories = JSON.parse(localStorage.getItem('categories'));
      else localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    addCategory(state, {title, color, image}) {
      state.categories.push({title: title, color: color, img: image,  tasks: [], doneTasks:[]});

      localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    updateTasks(state, category){
      state.categories = state.categories.map(el => {
        if(el.title === category.title) return category
        else return el
      });

      localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    addTask(state, {category, title}) {
      state.categories = state.categories.map(el => {
        if(el.title == category.title) {
          el.tasks.push({title: title, done: false});
          return el
        } else return el
      });

      localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    taskDone(state, {categoryName, task, done}) {
      state.categories = state.categories.map(el => {
        if(el.title === categoryName) {

          if(done) {
            let index = el.tasks.findIndex(t => t.title === task.title)

            el.tasks.splice(index, 1)
            el.doneTasks.push(task)
          } 
          else {
            let index = el.doneTasks.findIndex(t => t.title === task.title)

            el.doneTasks.splice(index, 1)
            el.tasks.push(task)
          }

          return el
        } else return el
      });

      localStorage.setItem('categories', JSON.stringify(state.categories))
    },
    changeCategoryTitle(state, {newTitle, oldTitle}) {
      state.categories.find(el => el.title === oldTitle).title = newTitle

      localStorage.setItem('categories', JSON.stringify(state.categories))
    }
  },
  actions: {
  },
  modules: {
  }
})
