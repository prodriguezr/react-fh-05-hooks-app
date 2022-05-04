import { mount } from 'enzyme';
import { HomeScreen, UserContext } from '../../../components/09-useContext';

describe('Test on <HomeScreen/> component', () => {
  const value = {
    user: {
      id: 1,
      name: 'Pablo',
      email: 'prodrigu75@gmail.com',
    },
    setUser: jest.fn(),
  };

  const wrapper = mount(
    <UserContext.Provider value={value}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
