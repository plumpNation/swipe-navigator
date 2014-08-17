var React = require('react'),
    page = require('./page'),
    debounce = require('debounce'),
    Hammer = require('hammerjs'),
    $ = require('jquery');

module.exports = React.createClass({
  getInitialState: function () {
      return {
        currentIndex: 0,
        pages: [],
        touching: false
      };
  },

  onScrollStop: function () {
    var element = this.getDOMNode(),
        pageWidth = element.scrollWidth / this.state.pages.length, // or this width??
        nearestPageX = pageWidth * Math.round(element.scrollLeft / pageWidth);

    // Scroll smoothly to nearest page
    console.log('Scrolling has stopped at', element.scrollLeft);

    if (!this.state.touching) {
      // Maybe replace this with something standalone, or greensock?
      element.scrollLeft = nearestPageX;
    }
  },

  onScroll: function () {
    console.log('scrolling');
  },

  componentWillMount: function () {
    this.updatePages(this.props.pages);
  },

  getPageElements: function () {
    return this.getDOMNode().getElementsByClassName('page-component');
  },

  scrollToPage: function (pageIndex) {
    var pages = this.getPageElements();

    if (pages[pageIndex]) {
      pages[pageIndex].scrollIntoView(true);
      this.setState.currentIndex = pageIndex;
    }
  },

  onRelease: function () {
    console.log('mouseup');
    this.state.touching = false;
  },

  addNavEvents: function () {
    var element = this.getDOMNode(),
        H = Hammer(element);

    H.on('release', function (e) {
      console.log('release');
    }.bind(this));

    H.on('swipeleft', this.scrollRight);
    H.on('swiperight', this.scrollLeft);
    H.on('panend', this.onRelease);
    H.on('panstart', function () {
      this.state.touching = true;
    }.bind(this));

    $(element)
      .on('scroll', this.onScroll)
      .on('scroll', debounce(this.onScrollStop))
      .on('mouseup', this.onRelease);
  },

  scrollRight: function () {
    console.log('swipe left');
    this.scrollToPage(this.state.currentIndex + 1);
  },

  scrollLeft: function () {
    console.log('swipe right');
    this.scrollToPage(this.state.currentIndex - 1);
  },

  componentDidMount: function () {
    H = Hammer(this.getDOMNode());
    this.addNavEvents();
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
      onMouseUp: this.handleMouseUp,
    }, this.state.pages);
  }
});
