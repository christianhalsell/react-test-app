// Reducers and initial state
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Get todo items from local storage
const todos = JSON.parse(localStorage.getItem('todos'));

const initialState = {
  items: todos ? todos : []
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    resetTodos: (state) => {
      localStorage.setItem('todos', JSON.stringify([]));
      state.items = [];
    },
    addTodo: (state, action) => {
      localStorage.setItem(
        'todos',
        JSON.stringify([...state.items, action.payload])
      );
      state.items = [...state.items, action.payload];
    }
  },
  extraReducers: () => {} // For Async items
});

export const { resetTodos, addTodo } = todoSlice.actions;

export const displayTodos = (state) => state.todos.items;

export default todoSlice.reducer;
