import {useState} from 'react'
import { v4 as uuid } from 'uuid';
import { useLocalStorageState } from './useLocalStorageState';

function useListState(initialList) {

  // const [list, setList] = useState(initialList)
  const [list, setList] = useLocalStorageState('list', initialList);

  const addItem = (newText) => {
    setList([...list, {id: uuid(), text: newText, completed: false}])
  }

  const removeListItem = (itemId) => {
    const updatedList = list.filter(el => el.id !== itemId)
    setList(updatedList)
  }
  const toggleComplete = (itemId) => {
    const updList = list.map(el => {
      if (el.id === itemId) {
        return {...el, completed: !el.completed}
      } else {
        return el
      }
    })
    setList(updList)
  }

  const editItem = (itemId, updText) => {
    const updList = list.map(el => {
      if (el.id === itemId) {
        return {...el, text: updText}
      } else {
        return el
      }
    })
    setList(updList)
  }

  return {
    list,
    addItem,
    removeListItem,
    toggleComplete,
    editItem
  }
}

export default useListState