var React = require('react'),
    page = require('./page');

module.exports = React.createClass({
  getInitialState: function () {
      return {
        pageCount: 0
      };
  },

  handleScroll: function () {
    console.log('scrolling');
  },

  render: function () {
    var pages;

    if (this.props.pages !== undefined) {
      pages = this.props.pages.map(function (pageData, index) {
        this.state.pageCount += 1;
        pageData.key = 'page-' + index;
        return page(pageData);
      }.bind(this));
    }

    return React.DOM.div({
      className: 'page-manager',
      onScroll: this.handleScroll
    }, pages);
  }
});
