export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'Add': {
      return [...state, action.payload];
    }
    case 'Delete': {
      return state.filter((todo) => todo.id !== action.payload); //[...state, action.payload];
    }
    case 'Toggle': {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    }
    case 'Toggle-old': {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        } else return todo;
      });
    }
    default:
      return state;
  }
};
