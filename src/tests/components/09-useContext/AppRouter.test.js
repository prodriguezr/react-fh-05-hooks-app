import { mount } from 'enzyme';

import { AppRouter, UserContext } from '../../../components/09-useContext';

describe('Tests on <AppRouter/>', () => {
  const setUser = jest.fn();

  const value = {
    user: {
      id: 1,
      name: 'Marisel',
      email: 'prodrigu@gmail.com',
    },
    setUser,
  };
  const wrapper = mount(
    <UserContext.Provider value={value}>
      <AppRouter />
    </UserContext.Provider>
  );

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
