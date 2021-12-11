import React from 'react'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Item from './Item';
import Divider from '@mui/material/Divider';
import { v4 as uuid } from 'uuid';

function TodoList(props) {
  if (props.list.length > 0)
  return (
    <Paper>
      <List>
        {props.list.map((el, i) => (
          <div  key={uuid()}>
            <Item 
            key={el.id}
            {...el}
            removeListItem={props.removeListItem}
            toggleComplete={props.toggleComplete}
            editItem={props.editItem}
            />
            {i < props.list.length - 1 &&  <Divider/>}
          </div>
         )
        )}
      </List>
    </Paper>
  )
  return null
}

export default TodoList