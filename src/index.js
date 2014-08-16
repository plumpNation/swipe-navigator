var React = require('react'),
    pageManager = require('./components/page-manager'),

    app = document.getElementById('application-container');

React.renderComponent(pageManager({
  'pages': [{
    'title': 'boom 1',
    'body': 'some text that should go in there'
  },
  {
    'title': 'boom 2',
    'body': 'some text that should go in there'
  }]
}), app);
