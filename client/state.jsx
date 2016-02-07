let QuestionsHandle = Meteor.subscribe('questions');
let LogHandle = Meteor.subscribe('log');

State = new ReactiveState();

State.set('answeredQuestion', false);
State.set('questionLoaded', false);
State.set('userSetup',false);

State.set('Questions.isReady', function() {
  return QuestionsHandle.ready();
});

State.set('Question.isLoaded'),
function() {
  return State.get('questionLoaded');
}

State.modify('Questions.getQuestion', function(state = false) {
  var question = State.get('curQuestion');
  var answered = State.get('answeredQuestion');

  if (typeof question != "undefined") {
    ReactLayout.render(Layout, {content: <Quiz question={question}/>});
  }

});

State.modify('User.setup', function(state = false) {
  let studentProfile = State.get('userProfile');
  let userLog = QuestionsLog.find({user_id: State.get('userId')}, {sort: {answeredOn: -1}}).fetch();
  ReactLayout.render(Layout, {content: <Landing student={studentProfile} userLog={userLog}/>});
});
