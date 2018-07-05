import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/Home')
const DisplayEvents = () => import('@/components/DisplayEvents')
const Members = () => import('@/components/Members')
const Contactus = () => import('@/components/contact-us')
const Blog = () => import('@/components/Blog')
const Eachblog = () => import('@/components/Eachblog')
const PageNotFound = () => import('@/components/PageNotFound')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/events',
      name: 'DisplayEvents',
      component: DisplayEvents
    },
    {
      path: '/members',
      name: 'Members',
      component: Members
    },
    {
      path: '/contact-us',
      name: 'Contact-us',
      component: Contactus
    },
    { path: '/blog',
      name: 'Blog',
      component: Blog

    },
    { path: '/blog/:id',
      name: 'Eachblog',
      component: Eachblog

    },
    { path: '/*',
      name: 'errorPage',
      component: PageNotFound }
  ],
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
