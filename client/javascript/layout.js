if(Meteor.isClient){
  Meteor.startup(function(){
    var height = 20;
    console.log(height);
    //$('#layout-main-content').css('background-color','black');
  });
}
Questions = new Mongo.Collection("Questions");
QuestionHistory = new Mongo.Collection("QuestionHistory");
