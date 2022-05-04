import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './';
import './style.css';
import { TodoList, TodoAdd } from './';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (payload) => {
    dispatch({ type: 'Delete', payload });
  };

  const handleToggle = (payload) => {
    dispatch({ type: 'Toggle', payload });
  };

  const handleAddTodo = (payload) => {
    dispatch({ type: 'Add', payload });
  };

  return (
    <div>
      <h1>Todo App ({todos.length})</h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};
