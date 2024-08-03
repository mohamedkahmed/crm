import { redirect, useLocation   } from "react-router-dom"


export const Loader = (store , page ) => ({request }) => {
  
    const user = store.getState().userState.userinfo;
    const url = new URL(request.url)
    const pathName = url.pathname
    console.log(pathName);
    if(pathName !== page && !(user.type === "admin" || user.watch === true || user.edit === true)) {
       
      return  redirect("/")
    }


    return null
}
 