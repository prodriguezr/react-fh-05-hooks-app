import { shallow } from 'enzyme';

import { TodoListItem } from '../../../components/08-useReducer';
import { demoTodos } from '../../fixtures';

describe('Tests on <TodoListItem/>', () => {
  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={1}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('It should call delete function', () => {
    wrapper.find('button').simulate('click');

    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('It should call toggle function', () => {
    wrapper.find('p').simulate('click');

    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('It should display text correctly', () => {
    expect(wrapper.find('p').text().trim()).toBe(
      `${demoTodos[0].id + 1}.- ${demoTodos[0].description}`
    );
  });

  test('Must have class complete if todo.done is true', () => {
    const todo = demoTodos[1];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} index={1} />);

    expect(wrapper.find('p').prop('className')).toBe('complete');
    expect(wrapper.find('p').hasClass('complete')).toBe(true);
  });
});
