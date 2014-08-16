var React = require('react'),
    pageHelper = require('./helpers/page-helper'),
    pageManager = require('./components/page-manager'),
    merge = require('merge'),

    app = document.getElementById('application-container'),

    newPageButton = document.getElementById('add'),

    count = 1;

var manager = React.renderComponent(pageManager({
  'pages': [
    pageHelper.shortPage(count++),
    pageHelper.longPage(count++),
    merge(pageHelper.shortPage(count++))
  ],
  scrollLatency: 100
}), app);

newPageButton.addEventListener('click', function () {
  console.log('Clicked the new page button');
  manager.addPage(pageHelper.shortPage(count++));
}, false);
