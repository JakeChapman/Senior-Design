if(Meteor.isServer){
  process.env.MONGO_URL="mongodb://adminDev:sekret@candidate.53.mongolayer.com:10777/StudyLock";
  console.log("MONGO URL is: " + process.env.MONGO_URL);
}
