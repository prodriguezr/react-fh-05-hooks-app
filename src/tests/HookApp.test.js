import { shallow } from 'enzyme';

import { HooksApp } from '../HooksApp';

describe('Tests on <HooksApp/>', () => {
  test('It should display correctly', () => {
    const wrapper = shallow(<HooksApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
