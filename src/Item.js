import ListItem from '@mui/material/ListItem';
import useToggle from './hooks.js/useToggle';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteSharp from '@mui/icons-material/DeleteSharp';
import EditSharp from '@mui/icons-material/EditSharp';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import EditItemForm from './EditItemForm';

function Item(props) {
  const [isEditing, toggleIsEditing] = useToggle(false)
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
        <IconButton aria-label='delete' onClick={() => props.removeListItem(props.id)}>
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
            editItem={props.editItem}
            toggle={toggleIsEditing}
          /> 
        : displayItem}
    </ListItem>
    </>
  )
}

export default Item