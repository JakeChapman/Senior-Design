//Routes JS Page, for documentation go to
//http://iron-meteor.github.io/iron-router/
Router.route('/', function() {
  //Code used to specify which template to use
  this.render('landing');
  //Code used to specify which if any layout to be used
  this.layout('layout');
});
