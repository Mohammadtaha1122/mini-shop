import { createContext, useContext, useEffect, useState } from "react";

export const newContext = createContext()

function ContextProvider ({children}) {
  const [calas, setCalas] = useState([]);
  const [buying ,setBuying] = useState(() => {
    const saved = localStorage.getItem("buying")
    return saved ? JSON.parse(saved) : []
  })
  const [isLogin ,setIsLogin] = useState(() => {
    const logined = localStorage.getItem("isLogin")
    return logined ? JSON.parse(logined) : null
  })
  useEffect(() => {
    localStorage.setItem("buying",JSON.stringify(buying))
  },[buying])
  useEffect(() => {
    localStorage.setItem("isLogin" ,JSON.stringify(isLogin))
  } ,[isLogin])
  return ( 
    <newContext.Provider value={{calas,setCalas,buying,setBuying,isLogin,setIsLogin}}>
      {children}
    </newContext.Provider>
   );
}

export const useLogin = () => (
  useContext(newContext)
)

export default ContextProvider;