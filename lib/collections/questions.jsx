//Collections
Questions = new Mongo.Collection("Questions");

Meteor.methods({
});

//Schema Definitions to be used to validate documents

Question = new SimpleSchema({
  text: {
    type: String,
    max: 100
  },
  answers: {
    type: [Object],
    minCount: 1,
    maxCount: 4
  },
  rationale: {
    type: String,
    max: 200
  },
  qType: {
    type: String
  }
});
