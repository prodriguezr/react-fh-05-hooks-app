import { shallow } from 'enzyme';

import { TodoAdd } from '../../../components/08-useReducer';

describe('Test on <TodoAdd/> component', () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must not call the function handleAddTodo', () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test('Must call the handleAddTodo function', () => {
    const value = 'Aprender React';
    wrapper
      .find('input')
      .simulate('change', { target: { value, name: 'description' } });

    const formSubmit = wrapper.find('form').prop('onSubmit');

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      description: value,
      done: false,
    });

    //console.log(wrapper.find('input').prop('value'));

    expect(wrapper.find('input').prop('value')).toBe('');
  });
});
