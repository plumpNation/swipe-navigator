var React = require('react');

var makeTheButton = function (buttonData) {
  React.DOM.button({
    onClick: buttonData.onClick
  }, buttonData.text);
};

module.exports = React.createClass({
  handleClick: function () {
    console.log('boom');
  },

  render: function () {
    var button;

    if (this.props.button) {
      button = makeTheButton(this.props.button);
    }

    return React.DOM.div({
        className: 'page-component',
        onClick: this.handleClick
      },
      React.DOM.div({
          className: 'page-component-inner'
        },
        React.DOM.h1(null, this.props.title),
        React.DOM.p(null, this.props.body),
        button
      )
    );
  }
});
