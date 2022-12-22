import { Container, List } from '@mui/material';
import React, { useState } from 'react';
import Form from '../components/Form';
import TodoItem from '../components/TodoItem';
import Header from '../components/Header';


export default function Todo(todo) {
    const [todos, setTodos] = useState([]);
    
    const addTodo = (todo) => {
        setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
        var filtered = todos.filter((todo) => todo.id !== id);
        setTodos(filtered);    
    }

    const editTodo = (id, editedText) =>{
        var todosArray = [...todos];
        for (var i in todosArray){
            if ( todosArray[i].id === id){
                todosArray[i].text = editedText;
            }
        }
        setTodos(todosArray);
    }

  return (
  <>
    <Header />
    <Container maxWidth="xs" style={{ marginTop: "1em" }}>
      
      <Form addTodo={addTodo} todos={todos} setTodos={setTodos}/>
      <List sx={{ marginTop: "1em" }}>
        {todos.map((todo) => (
            <div key={todo.id} style={{ marginTop: "1em" }}>
              <TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo} setTodos={setTodos} todos={todos}/>
            </div>
        ))}
      </List>
    </Container>
  </>
  )
}
