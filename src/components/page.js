var React = require('react');

module.exports = React.createClass({
  handleClick: function () {
    console.log('boom');
  },
  render: function () {
    return React.DOM.div({
        className: 'page-component',
        onClick: this.handleClick
      },
      React.DOM.div({
          className: 'page-component-inner'
        },
        React.DOM.h1(null, this.props.title),
        React.DOM.p(null, this.props.body)
      )
    );
  }
});
