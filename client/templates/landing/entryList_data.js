 var entriesData = [
   {
     timestamp: "10/26/15 - 12:30 p.m.",
     description: 'Answered (Insert Question Text with link) incorrectly'

   },
   {
     timestamp: "10/26/15 - 12:35 p.m.",
     description: 'Answered (Insert Question Text with link) correctly'

   },
   {
     timestamp: "10/26/15 - 12:40 p.m.",
     description: 'Answered (Insert Question Text with link) correctly'
   },
   {
     timestamp: "10/26/15 - 1:30 p.m.",
     description: 'Uploaded (Document Name with link) successfully'
   },
   {
     timestamp: "10/26/15 - 2:30 p.m.",
     description: 'Converted (Document Name with link) into questions successfully'
   },
 ];

Template.entryList.helpers({
  entries: entriesData
});
