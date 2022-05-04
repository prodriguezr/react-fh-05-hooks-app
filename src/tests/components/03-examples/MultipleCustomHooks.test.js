import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useCounter } from '../../../hooks/useCounter';
import { useFetch } from '../../../hooks/useFetch';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Test on <MultipleCustomHooks/>', () => {
  test('It should display correctly', () => {
    useCounter.mockReturnValue({
      counter: 1000,
      increment: () => {},
      decrement: () => {},
    });

    useFetch.mockReturnValue({
      data: [
        {
          author: 'prodrigu',
          quote: 'Hello, World!',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
  });

  test('It should display the information', () => {
    useCounter.mockReturnValue({
      counter: 1000,
      increment: () => {},
      decrement: () => {},
    });
    useFetch.mockReturnValue({
      data: [
        {
          author: 'prodrigu',
          quote: 'Hello, World!',
        },
      ],
      loading: false,
      error: null,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.me-0').text().trim()).toBe('Hello, World!');
    expect(wrapper.find('.blockquote-footer').text().trim()).toBe('prodrigu');
  });
});
