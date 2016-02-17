if (Meteor.isServer) {

  Meteor.publish('questions', function() {
    return Questions.find({});
  });

  console.log("Published Questions");

  Meteor.publish('log', function(limitCount, userId) {
    return [
        QuestionsLog.find({user_id: userId}, {sort: {answeredOn: -1}}),
        Questions.find({})
        ];
  });

  QuestionsLog.allow({
   'insert': function (userId,doc) {
     /* user and doc checks ,
     return true to allow insert */
     return true;
   }
 });
};
