import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState'
import { TodosContext } from './context/TodosContext';

function EditItemForm({id, text, toggle}) {
  const [inp, handleInpChange, resetInp] = useInputState(text)
  const {dispatch} = useContext(TodosContext)

  return (
    <>
      <form 
        style={{width: '100%', marginLeft: '12px', marginRight: '12px'}}
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({type: 'EDIT', itemId: id, updText: inp})
          resetInp()
          toggle()
        }}
      >
        <TextField 
          value={inp} 
          onChange={handleInpChange}
          margin='normal'
          label='Edit item'
          fullWidth
          autoFocus
        />
      </form>
    </>
  )
}

export default EditItemForm