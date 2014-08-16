var React = require('react'),
    page = require('./page'),
    debounce = require('debounce');

module.exports = React.createClass({
  getInitialState: function () {
      return {
        pages: []
      };
  },

  scrollStop: function () {
    var element = this.getDOMNode(),
        xScroll = element.scrollLeft,
        scrollWidth = element.scrollWidth,
        pageWidth = scrollWidth / this.state.pages.length, // or this width??
        nearestPageX = pageWidth * Math.round(xScroll / pageWidth);

    element.scrollLeft = nearestPageX;

    // Scroll smoothly to nearest page
    console.log('Scrolling has stopped at', xScroll);
  },

  componentWillMount: function () {
    this.updatePages(this.props.pages);
  },

  addPage: function (pageData) {
    this.state.pages.push(page(pageData));
    this.setState({'pages': this.state.pages});
  },

  updatePages: function (pages) {
    if (pages !== undefined) {
      console.log('Updating pages');

       pages.forEach(function (pageData, index) {
         this.addPage(pageData);
       }.bind(this));
    }
  },

  render: function () {
    console.log('Rendering');

    return React.DOM.div({
      className: 'page-manager',
      onScroll: debounce(this.scrollStop, this.props.scrollLatency || 200),
      onMouseUp: this.handleMouseUp,
    }, this.state.pages);
  }
});
