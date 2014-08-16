var React = require('react'),
    pageHelper = require('./helpers/page-helper'),
    pageManager = require('./components/page-manager'),
    merge = require('merge'),

    app = document.getElementById('application-container');

React.renderComponent(pageManager({
  'pages': [
    pageHelper.shortPage(1),
    pageHelper.longPage(2),
    merge(pageHelper.shortPage(3), {button: {
      onClick: function () {
        console.log('I clicked the page button');
      },
      text: 'Click me'
    }})
  ]
}), app);
