module.exports = function () {
  return {

    name: 'permalink',

    helper: function (...args) {
      const {site} = this.env.collections;
      const page = site.pages.find(...args);
      if (!page || !page.permalink) {
        throw new Error(`Could not generate page for permalink`);
      }
      return page.permalink;
    }
  };
};
