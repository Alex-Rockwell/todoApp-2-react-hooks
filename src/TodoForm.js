import React, { useContext } from 'react'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import useInputState from './hooks/useInputState'
import { TodosContext } from './context/TodosContext';

function TodoForm() {
  const [inp, handleInpChange, resetInp] = useInputState('')
  const {addItem} = useContext(TodosContext)

  return (
    <Paper style={{margin: '1rem 0', padding: '1rem'}}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          addItem(inp)
          resetInp()
        }}
      >
        <TextField 
          value={inp} 
          onChange={handleInpChange}
          margin='normal'
          label='Add new item'
          fullWidth  
        />
      </form>
    </Paper>
  )
}

export default TodoForm