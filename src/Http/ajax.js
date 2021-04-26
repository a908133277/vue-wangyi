import Axios from 'axios'
import { Toast } from 'vant';
import router from '../router';
Axios.defaults.timeout=30000
Axios.interceptors.request.use((res)=>{
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 'toast', // 持续展示 toast
  });
  return res
},(err)=>{
  Toast.clear()
  router.replace('/error')
  return err
})
Axios.interceptors.response.use((res)=>{
  Toast.clear()
  return res
},(err)=>{
  Toast.clear()
  router.replace('/error')
  return err
})

export default  function ajax(url,params,type="GET"){
  switch(type){
    case 'GET':
      return  Axios.get(url,{params})
    case 'POST':
      return  Axios.post(url,params)
  }
}