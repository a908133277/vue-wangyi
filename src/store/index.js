import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      CarData:[]
    },
    mutations: {
      setCarData(state,Data){
          state.CarData.push(Data)
      },
      delateCarData(state,index){
          Vue.delete(state.CarData,index)
      },
      checkAll(state){
        state.CarData.forEach((item)=>{
          Vue.set(item,'check',true)
        })
      },
      checkNoAll(state){
        state.CarData.forEach((item)=>{
          Vue.set(item,'check',false)
        })
      }
    },
  })

