import React, { createContext, useReducer } from "react";
import appReducer from "../reducers/appReducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer"
const defaultTodos = [
  { id: 1, text: "Text example N 1", completed: false },
  { id: 2, text: "Text example N 2", completed: false }
];
export const TodosContext = createContext()
export const DispatchContext = createContext()

export function TodosProvider(props) {
  // const [list, dispatch] = useReducer(appReducer, defaultTodos)
  const [list, dispatch] = useLocalStorageReducer('list', defaultTodos, appReducer)
  
  return (
    <TodosContext.Provider value={list}>
      <DispatchContext.Provider value={dispatch}> 
        {props.children} 
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
