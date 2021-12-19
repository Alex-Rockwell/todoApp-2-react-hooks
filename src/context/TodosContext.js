import React, { createContext, useReducer } from "react";
import useListState from "../hooks/useListState";
import appReducer from "../reducers/appReducer";
const defaultTodos = [
  { id: 1, text: "Mow the lawn using goats", completed: false },
  { id: 2, text: "Release lady bugs into garden", completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const [list, dispatch] = useReducer(appReducer, defaultTodos)
  
  return (
    <TodosContext.Provider value={{list, dispatch}}>
      {props.children}
    </TodosContext.Provider>
  );
}
