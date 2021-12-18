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

function Item(props) {
  const [isEditing, toggleIsEditing] = useToggle(false)
  const {removeListItem} = useContext(TodosContext)
  const displayItem = <>
      <Checkbox 
        tabIndex={-1} 
        checked={props.completed}
        onChange={() => props.toggleComplete(props.id)}
      />
      <ListItemText style={{textDecoration: props.completed ? 'line-through' : 'none'}}>
        {props.text}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='delete' onClick={() => removeListItem(props.id)}>
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
            id={props.id}
            text={props.text}
            // editItem={props.editItem}
            toggle={toggleIsEditing}
          /> 
        : displayItem}
    </ListItem>
    </>
  )
}

export default Item