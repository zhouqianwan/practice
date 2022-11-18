// 看见store就说明见到了vuex

// 该文件用于创建vuex中最为核心的store
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'

// // 把vuex注册为插件
// 必須在创建store实例之前把vuex引入
Vue.use(Vuex)

// 准备state ，用于存数数据
const state  = {
  // 当前的和    
  sum:0,
  num:5
}
// 准备actions,用于响应组件中的动作
const actions = {
  jia(context,value){
    // console.log('actions中的jia函数被调用',context,value);
    //执行commit步骤，把传递的值继续传递 将动作名变为大写，用于区分是在mutations中
    context.commit('JIA',value)
  },
  jian(context,value){
    console.log('执行actions中的jian');
    context.commit('JIAN',value)
  }
}
// 准备mutations，用于操作数据
const mutations = {
  JIA(state,value){
    console.log('mutations中的JIA被调用',state,value);
    // state:数据   value：传递过来的值
    // 在这里进行 数据的操作
    state.sum += value

  },
  JIAN(state,value){
    console.log('执行mutations中的jian');
    state.sum -= value

  }
}


// 创建store
export default new Vuex.Store({
  actions,
  state,
  mutations
})
