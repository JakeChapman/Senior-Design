if (Meteor.isClient) {

  //Meteor.subscribe('questions');
  //console.log("Loaded Questions");

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

    'click #answerBtn': function(e, t) {
      e.preventDefault();
      question = getQuestion();
      answers = question.answers;
      console.log(answers.length);
      for (var i = 0; i < answers.length; i++) {
        if(answers[i].correct === true){
          console.log("HERE");
          actual = answers[i].answer;
        }
      }
      submitted = getCheckedAnswer();
      alert(actual);
      if(actual === submitted){
        alert("CORRECT");
      }else{
        alert("WRONG");
      }
    }

  });
}

function getCheckedAnswer() {
  radioBtn = document.querySelector('input[name = "answer"]:checked').parentNode;
  checked = radioBtn.getElementsByTagName('label');
  console.log(radioBtn);
  console.log(checked[0]);
  alert("Value is: " + checked[0].innerHTML);
  return checked[0].innerHTML;
}

function getQuestion() {
  return Questions.findOne({});
}
