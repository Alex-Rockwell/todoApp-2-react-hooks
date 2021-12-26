import React, { useContext } from 'react'
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import Item from './Item';
import Divider from '@mui/material/Divider';
import { v4 as uuid } from 'uuid';
import { TodosContext } from './context/TodosContext';

function TodoList() {
  const list = useContext(TodosContext)
  if (list.length > 0)
  return (
    <Paper>
      <List>
        {list.map((el, i) => (
          <div  key={uuid()}>
            <Item 
              key={el.id}
              id={el.id}
              text={el.text}
              completed={el.completed}
            />
            {i < list.length - 1 &&  <Divider/>}
          </div>
         )
        )}
      </List>
    </Paper>
  )
  return null
}

export default TodoList