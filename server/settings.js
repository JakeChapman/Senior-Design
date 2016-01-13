Questions = new Mongo.Collection("Questions");
QuestionHistory = new Mongo.Collection("QuestionHistory");



if(Meteor.isServer){


  Meteor.publish('questions', function(){
    questions = Question.find({});

    if(questions){
      return questions;
    }


    return this.ready();
  });

  Meteor.publish('history', function(){
    history = QuestionHistory.find({});

    if(history){
      return history;
    }

    return this.ready();
  });

}
