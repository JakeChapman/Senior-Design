if(Meteor.isClient){

  //Meteor.subscribe('questions');
  //console.log("Loaded Questions");

  Template.quiz.helpers({
  question : function() {
    // This will eventually grab the questions from what the user inputs
    //for now just return some simple stuff.
    //Line of code takes the Collection Cursor and turns it into an array of a single item
    question = getQuestion();
    return question.text;
  },
  isMultipleChoice : function(){
    question = getQuestion();
    console.log("Type: " + question.type);
    return question.type === "multiple choice";
  },
  answers: function() {
    question = getQuestion();
    return question.answers;
  }
  });

  Template.quiz.events({

  });
}

function getQuestion(){
  return Questions.findOne({});
}
