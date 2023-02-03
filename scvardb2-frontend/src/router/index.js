import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home'
import store from "../store"
import browseProject from "@/views/browseProject";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:home,
    beforeEnter(to,from,next) {
      store.commit("changeCurrtab",0)
      next()
    }
  },
  {
    path: '/browse-project',
    name: 'browseProject',
    component:browseProject,
    beforeEnter(to,from,next) {
      store.commit("changeCurrtab",1)
      next()
    }
  },

]

const router = new VueRouter({
  routes
})

export default router
