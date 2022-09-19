import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { resetTodos, addTodo, displayTodos } from '../features/todo/todoSlice';

const ToDo = () => {
  const [tempValue, setTempValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const todoItems = useSelector(displayTodos);
  return (
    <>
      <h1>ToDo</h1>
      <div>
        <Link to={-1}>back</Link>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>back</button>
      </div>
      <h3>Input Todo items</h3>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input onChange={(e) => setTempValue(e.target.value)} />
        </form>
      </div>
      <div>&nbsp;</div>
      <div>
        <button onClick={() => dispatch(addTodo(tempValue))}>Add Todo</button>{' '}
        <button
          onClick={() => dispatch(resetTodos())}
          style={{ backgroundColor: 'red', color: 'white' }}
        >
          Clear
        </button>
      </div>
      <h4>Items</h4>
      <div>
        {todoItems.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </>
  );
};

export default ToDo;
