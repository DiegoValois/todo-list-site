import React, {useState} from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { Paper } from '@mui/material';
import EditTodoDialog from './EditTodoDialog';
import { useNavigate } from "react-router-dom";

export default function TodoItem({ todo, deleteTodo, editTodo, setTodos, todos }) {
  const [openDialog, setOpenDialog] = useState(false);
  

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  }
  
  const navigate = useNavigate();

  const goToAboutPage = (page) => {
    navigate('/about?page='+page);
  }

  const checked = (id) => {
    const changeDone = todos.map((todo) => {
        if(todo.id === id){
      return {...todo, done: !todo.done};
      }
      return todo;
     })
    setTodos(changeDone);
    
  }

  return (
    <div>
      <EditTodoDialog open={openDialog} dialogHandler={dialogHandler} todo={todo} editTodo={editTodo}/>
      <Paper style={{padding: "0.5em 0em"}}>
        <ListItem
          secondaryAction={
            <>
            <IconButton style={{ marginRight: ".3em"}}>
             <CreateIcon  onClick={() => setOpenDialog(true)}/>
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteIcon />
            </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <ListItemIcon>
              <Checkbox edge="start" id={todo.id} tabIndex={-1} disableRipple onChange={() =>checked(todo.id)}/>
              {/* <Checkbox edge="start" tabIndex={-1} disableRipple onChange={(e) => setArrayIds(todo.id, e)}/> */}
            </ListItemIcon >
            <ListItemText primary={todo.text} onClick={() => goToAboutPage(todo.text)}/>
          </ListItemButton>
        </ListItem> 
      </Paper>
      
    </div>
  );
  
}

