// action creators are functions that take a param and return
// an 'action' that is consumed by a reducer. This may seem like
// unneeded boilerplate  but it's **really** nice to have a file
// with *all* possible ways to mutate the state of the app.
Actions = {};

//Used when mongo questions is answered
Actions.questionAnswered = function questionAnswered(result) {
  if (Match.test(result, QuestionLog)) {
    bootbox.alert("Check passed");
    console.log("check passed");
    QuestionsLog.insert(result);
    //Dispatcher.dispatch('QUESTION_LOGGED');
  } else {
    console.log(result);
    console.log(QuestionLog);
    bootbox.alert('FAILED TO VALIDATE QUESTION LOGGED');
  }
}

Reducers = {};

function merge(oldState, newState) {
  return _.extend({}, oldState, newState);
}

Dispatcher.register(function(action) {
  switch (action.type) {
    case 'QUESTION_LOGGED':
      if (state.questionsAnswered.length === 10) {
        state.questionsAnswered.pop();
        state.questionsAnswered.push(action.qLog);
      } else {
        state.questionsAnswered.push(action.qLog);
      }
      break;
    case 'GET_LANDING':
      let studentProfile = State.get('userProfile');
      let userLog = QuestionsLog.find({user_id: State.get('userId')}, {sort: {answeredOn: -1}}).fetch();
      ReactLayout.render(Layout, {content: <Landing student={studentProfile} userLog={userLog}/>});
      break;
    case 'SETUP_USER':
      let student = Meteor.user();
      State.set('userId', student._id);
      State.set('userProfile', student.profile);
      State.set('userSetup',true);
      break;
    case 'GET_QUESTION':
      if (State.get('answeredQuestion')) {
        console.log("TODO get next question");
      } else {
        State.set('curQuestion', function() {
          return Questions.findOne({})
        });
        State.set('questionLoaded', true);
      }
      break;
    case 'GET_ACTIVITY':
      break;
    default:
      return state;
      break;
  }
});

AfterAction(() => {
  if (Action.is('PRODUCT_SELECTED')) {}
});
