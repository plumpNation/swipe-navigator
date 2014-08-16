var React = require('react'),
    page = require('./page');

module.exports = React.createClass({
  getInitialState: function () {
      return {
        pages: []
      };
  },

  handleScroll: function () {
    console.log('scrolling');
  },

  /**
   * We only really want this for touch screens, so how to do that?
   */
  handleMouseUp: function () {
    console.log('mouse up');
  },

  componentWillMount: function () {
    console.log('Page manager will mount');
    this.updatePages(this.props.pages);
  },

  componentDidMount: function () {
    console.log('Mounted the page-manager');

    document.addEventListener('click', function () {
      console.log('Clicked the document');
      // this.addPage({
      //   key: 'XTRA',
      //   title: 'Extra page',
      //   body: 'This is the extra page body'
      // });
    }, false);
  },

  addPage: function (pageData) {
    this.state.pages.push(page(pageData));
  },

  updatePages: function (pages) {
    if (pages !== undefined) {
      console.log('Updating pages');

       pages.forEach(function (pageData, index) {
         pageData.key = 'page-' + index;
         this.addPage(pageData);
       }.bind(this));
    }
  },

  render: function () {
    console.log('Rendering');

    return React.DOM.div({
      className: 'page-manager',
      onScroll: this.handleScroll,
      onMouseUp: this.handleMouseUp,
    }, this.state.pages);
  }
});
