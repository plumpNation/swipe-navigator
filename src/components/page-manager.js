var React = require('react'),
    page = require('./page');

module.exports = React.createClass({
  handleScroll: function () {
    console.log('scrolling');
  },

  render: function () {
    var pages;

    if (this.props.pages !== undefined) {
      pages = this.props.pages.map(function (pageData, index) {
        pageData.key = 'page-' + index;
        return page(pageData);
      });
    }

    return React.DOM.div({
      className: 'page-manager',
      onScroll: this.handleScroll
    },
    pages);
  }
});
