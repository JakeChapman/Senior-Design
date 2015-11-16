if (Meteor.isClient) {

  Session.setDefault("diff", 0);
  Session.setDefault("numQuestions", 0);
  end = undefined;


  //Set Reactive Variable
  var getDiff = function() {
    return Session.get('diff');
  };
  var getQPP = function(){
    return Session.get("numQuestions");
  };

  Template.settings.helpers({
    setQuestionAmount: function() {
      return 10;
    },

    period: function() {
      console.log(getDiff());
      return getDiff();
    },
    QPP: function() {
      return Math.round(getQPP() / getDiff());
    },
  });

  Template.settings.events({
    "change #start": function(event, template) {
      start = new Date(event.target.value);
      console.log(start);
      console.log("End: " + end);
      if (end) {
        console.log("inside");
        timeDiff = Math.abs(end.getTime() - start.getTime());
        Session.set("diff", Math.ceil(timeDiff / (1000 * 3600 * 24)));
      }
    },

    "change #end": function(event, template) {
      end = new Date(event.target.value);
      console.log(end);
      console.log(start);
      console.log("Difference: " + Math.abs(end.getTime() - start.getTime()));
      timeDiff = Math.abs(end.getTime() - start.getTime());
      console.log(Math.ceil(timeDiff / (1000 * 3600 * 24)));
      Session.set("diff", Math.ceil(timeDiff / (1000 * 3600 * 24)));
    },

    "change #QPP-value": function(event, template){
      Session.set("numQuestions", event.target.value );
    }
  });

  Template.settings.rendered = function() {
    Session.set("diff", 0);
    Session.set("numQuestions", 0);
  };
}
