import React from 'react';
import './Form.css';

const Form = ({ todoItem, setTodoItem, todoList, setTodoList }) => {
  const inputHandler = (event) => {
    setTodoItem(event.target.value);
  };
  const submitButtonHandler = (event) => {
    event.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        name: todoItem,
        completed: false,
      },
    ]);
    setTodoItem('');
  };

  return (
    <form>
      <input
        value={todoItem}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />
      <button
        onClick={submitButtonHandler}
        className="todo-button"
        type="submit"
      >
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
