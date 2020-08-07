import { v4 as uuidv4 } from 'uuid';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: uuidv4(), task: action.task, done: false }];
    case 'DELETE':
      return state.filter((todo) => todo.id !== action.id);
    case 'UPDATE':
      return state.map(
        (todo) =>
          todo.id === action.id ? { ...todo, task: action.updatedTask } : todo
      );
    case 'TOGGLE_DONE':
      return state.map(
        (todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo)
      );
    default:
      throw new Error();
  }
}

export default reducer;
