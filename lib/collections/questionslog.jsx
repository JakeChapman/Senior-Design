//Collections
QuestionsLog = new Mongo.Collection("QuestionsLog");

console.log("Here");

Meteor.methods({

  "Log.create": function(data){
      let docId;

      if (!this.userId) throw new Meteor.Error(401,"Login Required");

      check(data, QuestionLog);


      docId = QuestionsLog.insert(data);

      QuizDomain.updateCounts();

      console.log("[Log.create]", docId);

      return docId;

  }

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
