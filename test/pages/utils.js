import { shallowMount } from '@vue/test-utils';

export async function getInitialised({ page, opts, asyncDataOpts }) {
  const Page = require(`@/pages/${page}`).default;
  if (!Page.asyncData) {
    return shallowMount(Page, opts);
  }

  let originalData = {};
  if (Page.data != null) {
    originalData = Page.data();
  }

  const asyncData = await Page.asyncData({
    error: jest.fn(),
    ...asyncDataOpts,
  });

  Page.data = function () {
    return {
      ...originalData,
      ...asyncData,
    };
  };

  return shallowMount(Page, opts);
}

module.exports = {
  getInitialised,
};
