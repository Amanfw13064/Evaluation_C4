import { Web_Urll } from "./actionType"
export const reducer=(store={Web:[]},{type,payload})=>{
    if(type==Web_Urll){
        return {...store,Web:[...store.Web,payload]}    
    }
    else{
        return store
    }
}
