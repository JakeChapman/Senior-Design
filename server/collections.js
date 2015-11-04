if(Meteor.isServer){
  Meteor.startup(function(){

    //var database = new MongoInternals.RemoteCollectionDriver("mongodb://adminDev:sekret@candidate.54.mongolayer.com:10536/StudyLock");

    Questions = new Mongo.Collection("Questions");

    Meteor.publish('questions',function(){
      console.log("Number of Documents on Server: " + Questions.find().count());
      return Questions.find();
    });
  });
}
