import { shallowMount } from '@vue/test-utils';
import BlogPost from '@/pages/blog/_slug';

describe('pages | blog | _slug', () => {
  it('should render blog post', () => {
    const wrapper = shallowMount(BlogPost, {
      data() {
        return {
          article: {
            title: 'Article title',
            description: 'description',
            seoImageUrl: 'https://example.net',
            content: 'Content',
            date: '2021-10-28',
          },
        };
      },
      computed: {
        date() {
          return 'formattedDate';
        },
        content() {
          return 'content';
        },
      },
    });

    expect(wrapper.find('.article__title').text()).toBe('Article title');
    expect(wrapper.find('.article__date').text()).toBe('formattedDate');
    expect(wrapper.find('.article__content').text()).toBe('content');
  });
});
