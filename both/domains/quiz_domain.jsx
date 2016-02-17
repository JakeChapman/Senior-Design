
QuizDomain = {

    curQuestion: {},
    counts: {},

    updateCounts(){
        counts = QuestionsLog.aggregate([
            {
                $group: {
                    _id: "$question_id",
                    count: { $sum: 1}
                }
            }
        ]);
        console.log(counts);
    },

    getQuestion(){
        if(typeof curQuestion === 'undefined' +
            ''){
            curQuestion = Questions.findOne({});
        }
        return curQuestion;
    },

    insertQuestionLog(logEntry){
        Meteor.call('Log.create', logEntry, this._handleServerError);

        console.log("[QuizStore.insertQuestionLog", logEntry);
    }
};