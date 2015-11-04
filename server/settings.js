if(Meteor.isServer){
  process.env.MONGO_URL="mongodb://adminDev:sekret@candidate.54.mongolayer.com:10536/StudyLock";
  console.log("MONGO URL is: " + process.env.MONGO_URL);
}
