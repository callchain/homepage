import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch((err) => {
    if (VueRouter.isNavigationFailure(err)) {
      // resolve err
      return err
    }
    // rethrow error
    return Promise.reject(err)
  })
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
