import React from 'react'
import TextField from '@mui/material/TextField';
import useInputState from './hooks.js/useInputState'

function EditItemForm(props) {
  const [inp, handleInpChange, resetInp] = useInputState(props.text)
  return (
    <>
      <form 
        style={{width: '100%', marginLeft: '12px', marginRight: '12px'}}
        onSubmit={(e) => {
          e.preventDefault()
          props.editItem(props.id, inp)
          console.log(inp)
          console.log(props.editItem)
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