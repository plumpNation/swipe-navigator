var React = require('react'),
    pageManager = require('./page-manager'),
    page = require('./page'),

    app = document.getElementById('application-container');

var thing = React.renderComponent(page({
  'title': 'boom',
  'body': 'some text that should go in there'
}), app);
