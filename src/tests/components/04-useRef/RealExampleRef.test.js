import { shallow } from 'enzyme';
import { RealExampleRef } from '../../../components/04-useRef';

describe('Tests on <RealExampleRef/>', () => {
  const wrapper = shallow(<RealExampleRef />);

  test('It should display correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('NultipleCustomHooks').exists()).toBe(false);
  });

  test('It should display the <MultpleCustomHooks/> component', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);
  });
});
