/*if (Meteor.isClient) {


  //Meteor.subscribe('questions');
  //console.log("Loaded Questions");
  Template.rationale.helpers({
    rationale: function() {
      question = getQuestion();
      return question.rationale;
    }
  });

  Template.rationale.events({
    "click #rationale": function(event, template){
       Router.go('quiz');
    }
  });
  Template.quiz.helpers({
    question: function() {
      // This will eventually grab the questions from what the user inputs
      //for now just return some simple stuff.
      //Line of code takes the Collection Cursor and turns it into an array of a single item
      question = getQuestion();
      return question.text;
    },
    isMultipleChoice: function() {
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

    'click #answer': function(e, t) {
      e.preventDefault();
      question = getQuestion();
      answers = question.answers;
      console.log(answers.length);
      for (var i = 0; i < answers.length; i++) {
        if (answers[i].correct === true) {
          console.log("HERE");
          actual = answers[i].answer;
        }
      }
      me = e.target;
      submitted = $(e.target).children(); //getCheckedAnswer();
      submitted = submitted[0].innerHTML;
      checkAnswers(submitted, actual, question);

      counter++;

      Meteor.setTimeout(function() {
        Router.go('rationale');
      }, 2500);
    }

  });
}


Template.quiz.rendered = function() {
  $('#question').fitText(2);
};
Template.rationale.rendered = function(){
  $('#rationale').fitText(2);
};

function checkAnswers(submitted, actual, question) {
  correct = false;
  //Check for correct answer
  if (submitted === actual) {
    me.style.backgroundColor = '#16b902';
    correct = true;
  } else {
    me.style.backgroundColor = 'rgb(244, 23, 23)';
  }

  //if it wasnt correct cycle through and find correct one
  radioBtns = $('#answer-box').children();

  for (var i = 0; i < radioBtns.length; i++) {
    answer = radioBtns[i].getElementsByTagName('label');
    if (answer[0].innerHTML === actual) {
      radioBtns[i].style.backgroundColor = '#16b902';
    }
  }

  //Insert into question history
  console.log(question._id._str);

  QuestionHistory.insert({question_id: question._id, correct: correct});

  console.log("Inserted History");

}

var counter = 0;

function getQuestion() {
  //console.log("HERE");
  //answered = QuestionHistory.find({}, {fields: {question_id: 1}}).fetch();
  //console.log(Questions.find({ _id: { $ne: answered}}).count());
  questions = Questions.find().fetch();

  return questions[counter];
}
*/
