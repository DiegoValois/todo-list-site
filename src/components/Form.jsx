import React, { useState } from 'react'
import { TextField, Button, Paper } from '@mui/material'

export default function Form({ addTodo, arrayIds, todos, setTodos }) {
  const [ text, setText ] = useState(null);
  const [ id, setId] = useState(1);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id, done: false };
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById("outlined-basic").value = null;
  }

  const removeAllTask = () => {
    setTodos(todos.filter((todo) => !todo.done));
  }

  return (
    <div>
      <Paper style={{ padding: "1em" }}>
        <div style={{ display: "flex" , justifyContent: "center" }}>
          <TextField 
          id="outlined-basic"
          label="Task" 
          variant="outlined" 
          fullWidth 
          onChange={(e) => setText(e.target.value)}
          />
          <Button variant="text" onClick={() => todoCreate(text)}>Add</Button>
          <Button variant="text" onClick={() => removeAllTask()}>Delete</Button> 
        </div>
      </Paper>
    </div>
  )
}
