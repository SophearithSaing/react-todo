import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ todoItem, todoList, setTodoList }) => {
  const [editing, setEditing] = useState(false);

  const deleteHandler = () => {
    setTodoList(todoList.filter((item) => item.id !== todoItem.id));
  };
  const completeHandler = () => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === todoItem.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const editHandler = () => {
    todoItem.editing = !todoItem.editing;
    console.log(todoItem);
    setEditing(!editing);
    setTodoList(
      todoList.map((item) => {
        if (item.id === todoItem.id) {
          return {
            ...item,
            name: item.name,
            editing: item.editing,
          };
        }
        return item;
      })
    );
  };
  const inputHandler = (event) => {
    console.log(event.target.value);
    todoItem.name = event.target.value;
  };

  return (
    <div className="todo">
      <button onClick={completeHandler} className="todo-btn complete-btn">
        <i className="fa fa-check"></i>
      </button>
      <input
        className={`todo-item ${todoItem.completed ? 'completed' : ''} ${
          todoItem.editing ? '' : 'no-border'
        }`}
        defaultValue={todoItem.name}
        type="text"
        readOnly={!todoItem.editing}
        onChange={inputHandler}
      />
      <button onClick={editHandler} className="todo-btn edit-btn">
        <i
          className={`fa ${todoItem.editing ? 'fa-save' : 'fa-pencil-alt'}`}
        ></i>
      </button>
      <button onClick={deleteHandler} className="todo-btn delete-btn">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
