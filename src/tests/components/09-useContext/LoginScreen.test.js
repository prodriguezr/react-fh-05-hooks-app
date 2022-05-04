import { mount } from 'enzyme';
import { LoginScreen, UserContext } from '../../../components/09-useContext';

describe('Test on <LoginScreen/> component', () => {
  const setUser = jest.fn();

  const value = {
    // user: {
    //   id: new Date().getTime(),
    //   name: 'Pablo Rodríguez',
    //   email: 'prodrigu@gmail.com',
    // },
    setUser,
  };
  const wrapper = mount(
    <UserContext.Provider value={value}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Must execute the setUser function with the expected argument', () => {
    wrapper.find('LoginScreen').find('button').simulate('click');

    expect(setUser).toHaveBeenCalledWith({
      id: '4567',
      name: 'Marisel',
      email: 'marisel@gmail.com',
    });
    expect(typeof setUser).toBe('function');
  });
});
