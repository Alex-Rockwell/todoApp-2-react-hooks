import { v4 as uuid } from 'uuid';


const appReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, {id: uuid(), text: action.newText, completed: false}]
    case 'REMOVE':
      return state.filter(el => el.id !== action.itemId)
    case 'TOGGLE':
      return state.map(el => {
        if (el.id === action.itemId) {
          return {...el, completed: !el.completed}
        } else {
          return el
        }
      })
    case 'EDIT':
      return state.map(el => {
        if (el.id === action.itemId) {
          return {...el, text: action.updText}
        } else {
          return el
        }
      })
    default: 
      return state
  }

}


export default appReducer



