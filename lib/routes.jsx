//Flow Helpers
let pathFor = (path, params) => {
  let query = params && params.query
    ? FlowRouter._qs.parse(params.query)
    : {};
  return FlowRouter.path(path, params, query);
};

let urlFor = (path, params) => {
  return Meteor.absoluteUrl(pathFor(path, params));
};

let currentRoute = (route) => {
  FlowRouter.watchPathChange();
  return FlowRouter.current().route.name === route
    ? 'active'
    : '';
};

FlowHelpers = {
  pathFor: pathFor,
  urlFor: urlFor,
  currentRoute: currentRoute
};

// Flow Router here down

FlowRouter.route('/', {
  action: function(params) {
    if (User.loggedIn()) {
      ReactLayout.render(Layout, {content: <LogContainer/>});
    } else {
      ReactLayout.render(Login);
    }
  }
});

FlowRouter.route('/settings', {
  action: function(params) {
    ReactLayout.render(Layout, {content: <SettingsContainer/>});
  }
});

FlowRouter.route('/quiz', {
  action: function(params) {
    ReactLayout.render(Layout, {content: <QuizContainer/>});
  }
});

FlowRouter.route('/notes', {
  action: function(params) {
    ReactLayout.render(Layout, {content: <Notes/>});
  }
});
