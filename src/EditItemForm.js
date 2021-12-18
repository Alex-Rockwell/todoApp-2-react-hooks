import React, { useContext } from 'react'
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState'
import { TodosContext } from './context/TodosContext';

function EditItemForm(props) {
  const [inp, handleInpChange, resetInp] = useInputState(props.text)
  const {editItem} = useContext(TodosContext)

  return (
    <>
      <form 
        style={{width: '100%', marginLeft: '12px', marginRight: '12px'}}
        onSubmit={(e) => {
          e.preventDefault()
          editItem(props.id, inp)
          resetInp()
          props.toggle()
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