const initialState = [
  {
    id: 1,
    todo: 'Comprar yoghurt',
    done: false,
  },
];

const newTodo = [
  {
    id: 2,
    todo: 'Aprender react',
    done: false,
  },
];

const addTodoAction = {
  type: 'Add',
  payload: newTodo,
};

const todoIntroReducer = (state = initialState, action) => {
  if (action?.type === 'Add') {
    return [...state, action.payload];
  }

  return state;
};

let todos = todoIntroReducer();

todos = todoIntroReducer(todos, addTodoAction);

console.log(todos);
