//Routes JS Page, for documentation go to
//http://iron-meteor.github.io/iron-router/
Router.route('/', function() {
  //Code used to specify which template to use
  this.render('landing');
  //Code used to specify which if any layout to be used
  this.layout('layout');
  },
  {
    name : 'landing'
});

Router.route('/quiz',function(){
  // add subscription to wait list
  this.wait(Meteor.subscribe('questions'));
  this.wait(Meteor.subscribe('history'));

  if(this.ready()){
    this.render('quiz');
    this.layout('layout');
  }
});

Router.route('/rationale', function(){
  // add subscription to wait list
  this.wait(Meteor.subscribe('questions'));

  if(this.ready()){
    this.render('rationale');
    this.layout('layout');
  }
});

Router.route('/notes',function(){
  this.render('notes');
  this.layout('layout');
});

Router.route('/settings',function(){
  this.render('settings');
  this.layout('layout');
});
