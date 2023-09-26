import React, {useState, createContext} from "react";

export const CounterContext = createContext();

export const CounterProvider = ({children}) =>{
  const [count, setCount] = useState(0);
  const values = {
    count,
    suma(){
      setCount(count + 1)
    },
    resta(){
      setCount(count - 1)
    },
    user: {
      status: "Online",
      jwt: "aubdo9wuegb9ubsdoavuadfvbifuvbodfuvn",
      theme: "Light",
    }
  }
   return (<CounterContext.Provider value={values}>{children}</CounterContext.Provider>)
}