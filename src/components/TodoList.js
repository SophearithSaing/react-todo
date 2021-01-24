import React from 'react';
import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todoList, setTodoList, filteredList }) => {
  // if (filteredList.length === 0) {
  //   filteredList.append({
  //     id: Date.now(),
  //     name: todoItem,
  //     completed: false,
  //   });
  // }
  return (
    <div className="todo-container">
      <div className="todo-list">
        {filteredList.length === 0 ? (
          <h1 className="no-task">There's no task.</h1>
        ) : (
          filteredList.map((todoItem) => (
            <Todo
              className="todo-item"
              todoList={todoList}
              setTodoList={setTodoList}
              key={todoItem.id}
              todoItem={todoItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoList;
