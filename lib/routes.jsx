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
    if (State.get('userSetup')) {
      Dispatcher.dispatch('GET_LANDING');
    } else {
      Dispatcher.dispatch('SETUP_USER');
    }
  }
});

FlowRouter.route('/settings', {
  action: function(params) {
    ReactLayout.render(Layout, {content: <Settings/>});
  }
});

FlowRouter.route('/quiz', {
  action: function(params) {
    console.log('Calling Dispatcher');
    Dispatcher.dispatch('GET_QUESTION');
  }
});

FlowRouter.route('/notes', {
  action: function(params) {
    ReactLayout.render(Layout, {content: <Notes/>});
  }
});
