var React = require('react'),
    pageHelper = require('./helpers/page-helper'),
    pageManager = require('./components/page-manager'),

    app = document.getElementById('application-container');

React.renderComponent(pageManager({
  'pages': [
    pageHelper.shortPage(1),
    pageHelper.longPage(2),
    pageHelper.shortPage(3)
  ]
}), app);
