import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import useListState from './hooks/useListState';
import { TodosProvider } from './context/TodosContext';

function TodoApp() {
  // const initialList = JSON.parse(window.localStorage.getItem('list')) || []
  // const {list, addItem, removeListItem, toggleComplete, editItem} = useListState(initialList)

  // useEffect(() => {
  //   window.localStorage.setItem('list', JSON.stringify(list))
  // }, [list])

  return (
      <Paper 
        style={{
          margin: 0, 
          padding: 0,
          height: '100vh',
          background: '#fafafa'
        }}
        elevation={0}
      > 
        <AppBar color='primary' position="static" height='64px'>
          <Toolbar>
            <Typography color="inherit" variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Todo list with hooks
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
          <Grid item xs={11} md={8} lg={4}>
            <TodosProvider>
              <TodoForm/>
              <TodoList/>
            </TodosProvider>
          </Grid>
        </Grid>
      </Paper>
  )
}

export default TodoApp