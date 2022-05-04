import { shallow } from 'enzyme';

import { TodoList } from '../../../components/08-useReducer';
import { demoTodos } from '../../fixtures';

describe('Test on <TodoList/> component', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It must contain 2 elements of the type <TodoListItem/>', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
  });
});
