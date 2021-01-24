import React, { useState, useEffect } from 'react';
import './App.css';

import Form from './components/Form';
import Sidebar from './components/Sidebar';
import TodoList from './components/TodoList';

import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [category, setCategory] = useState('All');
  const [todoItem, setTodoItem] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [userName, setUserName] = useState('');

  const [user] = useAuthState(auth);

  useEffect(() => {
    const getLocalList = () => {
      if (localStorage.getItem('todoList') === null) {
        localStorage.setItem('todoList', JSON.stringify([]));
      } else {
        let localList = JSON.parse(localStorage.getItem('todoList'));
        setTodoList(localList);
      }
    };
    getLocalList();
  }, []);

  useEffect(() => {
    const filteredHandler = () => {
      switch (category) {
        case 'Completed':
          setFilteredList(todoList.filter((todo) => todo.completed === true));
          break;
        case 'Uncompleted':
          setFilteredList(todoList.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredList(todoList);
          break;
      }
    };
    const saveToLocal = () => {
      localStorage.setItem('todoList', JSON.stringify(todoList));
    };
    filteredHandler();
    saveToLocal();
    if (auth.currentUser != null) {
      setUserName(auth.currentUser.displayName);
    }
  }, [todoList, category, user]);

  return (
    <div className="app">
      <Sidebar setCategory={setCategory} category={category} name={userName} />
      {user ? (
        <div className="main">
          <header>
            <h1>{category}</h1>
          </header>
          <Form
            todoItem={todoItem}
            setTodoItem={setTodoItem}
            todoList={todoList}
            setTodoList={setTodoList}
          />
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            filteredList={filteredList}
          />
          <SignOut setUserName={setUserName} />
        </div>
      ) : (
        <SignIn />
      )}
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
  };

  return (
    <div className="sign-in">
      <button className="auth-button" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

function SignOut({ setUserName }) {
  const signOut = () => {
    auth.signOut();
    setUserName('');
  };
  return (
    <div className="sign-out">
      <button className="auth-button" onClick={signOut}>
        Sign Out
      </button>
    </div>
  );
}

export default App;
