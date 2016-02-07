//Collections
QuestionsLog = new Mongo.Collection("QuestionsLog");

console.log("Here");

Meteor.methods({
});

//Collection helpers
QuestionsLog.helpers({
  question: function(){
    return Questions.findOne(new Meteor.Collection.ObjectID(this.question_id._str));
  }
});

QuestionLog = new SimpleSchema({
  question_id: {
    type: String
  },
  user_id: {
    type: String
  },
  answeredOn: {
    type: Date
  },
  correct: {
    type: Boolean
  }
});
