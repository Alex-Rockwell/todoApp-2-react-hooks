import ListItem from '@mui/material/ListItem';
import useToggle from './hooks/useToggle';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteSharp from '@mui/icons-material/DeleteSharp';
import EditSharp from '@mui/icons-material/EditSharp';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditItemForm from './EditItemForm';
import { useContext } from 'react';
import { TodosContext } from './context/TodosContext';

function Item({id, text, completed}) {
  const [isEditing, toggleIsEditing] = useToggle(false)
  const {dispatch} = useContext(TodosContext)
  const displayItem = <>
      <Checkbox 
        tabIndex={-1} 
        checked={completed}
        onChange={() => dispatch({type: 'TOGGLE', itemId: id})}
      />
      <ListItemText style={{textDecoration: completed ? 'line-through' : 'none'}}>
        {text}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='delete' onClick={() => dispatch({type: 'REMOVE', itemId: id})}>
          <DeleteSharp />
        </IconButton>
        <IconButton aria-label='edit' onClick={toggleIsEditing}>
          <EditSharp />
        </IconButton>
      </ListItemSecondaryAction>
  </>
  return (
    <>
    <ListItem style={{height: '65px'}}>
      {(isEditing) 
        ? <EditItemForm 
            id={id}
            text={text}
            toggle={toggleIsEditing}
          /> 
        : displayItem}
    </ListItem>
    </>
  )
}

export default Item