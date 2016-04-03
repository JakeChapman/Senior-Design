if (Meteor.isServer) {

    Meteor.publish('questions', function(userId) {
        QuizDomain.counts  = QuestionsLog.aggregate([
            {
                $group: {
                    _id: {user_id: "$user_id", question_id: "$question_id"},
                    count: { $sum: 1}
                }
            }
        ]);

        QuizDomain.count = QuizDomain.counts.filter(function(count){
            if(userId === count._id.user_id){
                return count;
            }
        });


        if(typeof QuizDomain.count === 'undefined'){
            return Questions.find();
        }else{
            return Questions.find({_id: {$nin: QuizDomain.count.map(count => {
                console.log(count);
                return new Meteor.Collection.ObjectID(count._id.question_id);
            })}});
        }
    });

    console.log("Published Questions");

    var aboutAWeekAgo = new Date();
    aboutAWeekAgo.setDate(aboutAWeekAgo.getDate() - 7);

    Meteor.publish('log', function(limitCount, userId) {
    return [
        QuestionsLog.find({ $and: [ {user_id: userId}]}, {sort: {answeredOn: -1}}),
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

    Meteor.methods({
        "Scrape.test": function(){
            var websiteData = Scrape.website("http://www.pearsonitcertification.com/articles/article.aspx?p=1652024");
            var tempText =  websiteData.text.replace(websiteData.text.substr(0, websiteData.text.indexOf("1.")), "");
            var splitData = tempText.split(/[0-9]\./);
            var answerKey = {A: false, B: false, C: false, D: false};
            var questions = [];

            //Create Questions
            for(var i = 1; i < 259; i++){

                var answer = splitData[i + 258][1];

                var tempKey = answerKey;

                tempKey[answer] = true;

                questions.push({
                    text: splitData[i].split(/[A]\./),
                    answers:[
                        {
                            answer: splitData[i].slice(splitData[i].indexOf('A.') + 2,splitData[i].indexOf('B.')),
                            correct: tempKey["A"],
                            index: 0
                        },
                        {
                            answer: splitData[i].slice(splitData[i].indexOf('B.') + 2,splitData[i].indexOf('C.')),
                            correct: tempKey["B"],
                            index: 1
                        },
                        {
                            answer: splitData[i].slice(splitData[i].indexOf('C.') + 2,splitData[i].indexOf('D.')),
                            correct: tempKey["C"],
                            index: 2
                        },                        {
                            answer: splitData[i].slice(splitData[i].indexOf('D.') + 2,splitData[i].length),
                            correct: tempKey["D"],
                            index: 3
                        }
                    ]

                })
            }


            console.log(websiteData);
        }
    })

};
