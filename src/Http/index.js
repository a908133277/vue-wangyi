import ajax from './ajax'

export const getIndex = (data) => ajax("api/xhr/index/indexV2.json",data,"GET")
export const getRcmd = (data) => ajax("api/xhr/rcmd/indexV2.json",data,"GET")
export const getCategorySimple = (data) =>ajax("/api/xhr/list/categorySimple.json",data,"GET")
export const getSubCate = (data) => ajax("/api/xhr/list/subCate.json",data,"GET")
export const  getItems = (data) => ajax("/api/xhr/list/l2Items2.json",data,"GET")
export const getDetail = (data) => ajax("api/xhr/item/detail.json",data,"GET")