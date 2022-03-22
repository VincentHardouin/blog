import { shallowMount } from '@vue/test-utils';
import Page from '@/pages/_slug';

describe('pages | _slug', () => {
  it('should render blog post', () => {
    const wrapper = shallowMount(Page, {
      data() {
        return {
          page: {
            title: 'Article title',
            content: 'Content',
            date: '2021-10-28',
          },
        };
      },
      computed: {
        content() {
          return 'content';
        },
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
