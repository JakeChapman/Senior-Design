
LogDomain = {
    getQuestionLog(){
        return QuestionsLog.find().fetch();
    },

    getQuestionsIdfromLog(){
        return Questions.find({}, {fields: {_id: 1}}).map(doc => doc._id);
    },

    getQuestionFromLog(qId) {
        return Questions.findOne(qId);
    },

};