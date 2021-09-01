import { mount } from '@vue/test-utils';
import ArticleCard from '../../components/ArticleCard';

describe('Component | ArticleCard', function () {
  it('should given props', function () {
    const article = {
      title: 'title',
      date: '01/09/2021',
      slug: 'article-slug',
    };

    const wrapper = mount(ArticleCard, {
      stubs: {
        NuxtLink: true,
      },
      propsData: {
        article,
      },
    });

    expect(wrapper.find('.post-card__title').text()).toBe(article.title);
    expect(wrapper.find('.post-card__date').text()).toBe(article.date);
  });
});
