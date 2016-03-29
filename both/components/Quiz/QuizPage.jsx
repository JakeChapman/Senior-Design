this.QuizPage = React.createClass({

    getInitialState(){
        return{
            answered: false
        }
    },

    handleAnswer(correct, data) {
        this.setState({answered: true});
        console.log(correct);
        let logEntry = {question_id: data._id._str, user_id: Meteor.userId(), answeredOn: new Date().getDate(), correct: correct};
        console.log(logEntry);
        QuizDomain.insertQuestionLog(logEntry);
        ReactLayout.render(Layout, {content: <Rationale question={data} correct={correct}/>});

        //Update profile
        let curUser = Meteor.user();
        let curProfile = curUser.profile;
        curProfile.answered = true;
        Meteor.users.update(curUser._id, {$set: {profile: curProfile}});
    },

    render() {

          return (
            <div className="container" id="quiz-wrapper">
              <Question text={this.props.question.text}/>
              <Answers question={this.props.question} onClick={this.handleAnswer}/>
            </div>
          )
    }
});


this.QuizPage.propTypes = {
    question: React.PropTypes.object,
    correctAnswer: React.PropTypes.array,
    answered: React.PropTypes.bool
};
