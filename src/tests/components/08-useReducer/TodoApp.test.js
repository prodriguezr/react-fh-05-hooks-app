import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Test on <TodoApp/> component', () => {
  Storage.prototype.setItem = jest.fn();
  const wrapper = shallow(<TodoApp />);

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should add TODO', () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text().trim()).toBe(
      `Todo App (${demoTodos.length})`
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test('It should delete a TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    expect(wrapper.find('h1').text().trim()).toBe(`Todo App (1)`);
    wrapper.find('TodoList').prop('handleDelete')(1);
  });
});
