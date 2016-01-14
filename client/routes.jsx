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
  subscriptions: function() {
    this.register('history', Meteor.subscribe('history'));
  },
  action: function(params) {
    ReactLayout.render(Layout, {
      content: <Landing/>
    });
  }
});

FlowRouter.route('/settings', {
  action: function(params){
    ReactLayout.render(Layout, {
      content: <Settings/>
  });
  }
});

FlowRouter.route('/quiz', {
  subscriptions: function() {
    this.register('questions', Meteor.subscribe('questions'));
  },
  action: function(params){
    ReactLayout.render(Layout, {
      content: <Quiz/>
  });
  }
});

FlowRouter.route('/notes', {
  action: function(params){
    ReactLayout.render(Layout, {
      content: <Notes/>
  });
  }
});
