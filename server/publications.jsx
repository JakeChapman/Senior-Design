if (Meteor.isServer) {

  Meteor.publish('questions', function() {
    questions = Questions.find({});

    if (questions) {
      return questions;
    }

    return this.ready();
  });

  console.log("Published Questions");

  Meteor.publish('log', function() {
    log = QuestionsLog.find({});

    if (log) {
      return log;
    }

    return this.ready();
  });
};
