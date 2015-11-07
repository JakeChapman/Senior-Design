if (Meteor.isServer) {
  Meteor.startup(function() {

    //var database = new MongoInternals.RemoteCollectionDriver("mongodb://adminDev:sekret@candidate.54.mongolayer.com:10536/StudyLock");

    Questions = new Mongo.Collection("Questions");

    Meteor.publish('questions', function() {
      console.log("Number of Documents on Server: " + Questions.find().count());
      return Questions.find();
    });
});
}

    /*Images = new FS.Collection("images", {
      stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
    });

    Images.deny({
      insert: function() {
        return false;
      },
      update: function() {
        return false;
      },
      remove: function() {
        return false;
      },
      download: function() {
        return false;
      }
    });

    Images.allow({
      insert: function() {
        return true;
      },
      update: function() {
        return true;
      },
      remove: function() {
        return true;
      },
      download: function() {
        return true;
      }
    });
  });
}
*/
