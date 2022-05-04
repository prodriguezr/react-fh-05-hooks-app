import { todoReducer } from '../../../components/08-useReducer';
import { demoTodos } from '../../fixtures';

describe('Tests on todoReducer component', () => {
  test('It should return default state', () => {
    const state = todoReducer(demoTodos, {});

    console.log(state);

    expect(state).toEqual(demoTodos);
  });

  test('It should add TODO', () => {
    const payload = {
      id: 3,
      description: 'Aprender Java',
      done: false,
    };

    const state = todoReducer(demoTodos, { type: 'Add', payload });

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, payload]);
  });

  test('It should delete TODO', () => {
    const state = todoReducer(demoTodos, { type: 'Delete', payload: 1 });

    console.log(state);

    expect(state.length).toBe(1);
  });

  test('It should apply toggle', () => {
    const { done } = demoTodos.find((t) => t.id === 2);

    const state = todoReducer(demoTodos, { type: 'Toggle', payload: 2 });

    const { done: doneChanged } = state.find((t) => t.id === 2);

    console.log(state, done, doneChanged);

    expect(doneChanged).toBe(!done);
  });
});
