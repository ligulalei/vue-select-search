import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import _ListSelect from '@/components/model/_ListSelect'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/listselect',
      name: '_ListSelect',
      component: _ListSelect
    }
  ]
})
