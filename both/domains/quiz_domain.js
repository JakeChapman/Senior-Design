
QuizDomain = {

    curQuestion: {},
    counts: {},
    userCount: {},
    userId: "",

    getQuestion(){
        return Questions.findOne({});
    },

    insertQuestionLog(logEntry){
        Meteor.call('Log.create', logEntry, this._handleServerError);
        console.log("Update Counts");
        console.log(this.counts);
        console.log("[QuizStore.insertQuestionLog", logEntry);
    },

    getNextQuestion(){
        let nxtQuestion = Questions.find().fetch();
        console.log(QuizDomain.count);
        return nxtQuestion;
    },

    startQuizTimer(interval){
        return Meteor.setInterval(function(){
            ReactLayout.render(QuizContainer);
        },interval);
    },

    endQuizTimer(timerId){
        Meteor.clearInterval(timerId);
    }
};