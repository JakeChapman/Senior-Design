class QuizPage extends React.Component{


    handleAnswer(correct, data) {
        console.log("Getting here");
        let logEntry = {question_id: data._id._str, user_id: Meteor.userId(), answeredOn: new Date(), correct: correct};
        console.log(logEntry);
        QuizDomain.insertQuestionLog(logEntry);
    }

    render() {

    if (this.props.answered) {
      return (
        <div className="container" id="quiz-wrapper">
          <Question text={this.props.question.text}/>
          <div className="correctAnswer">
            <Answer key={answer[0].index} text={answer[0].answer} correct={true}/>
          </div>
          <div className="card" id="rationale">
            {this.props.question.rationale}
          </div>
        </div>
      )
    } else {
      return (
        <div className="container" id="quiz-wrapper">
          <Question text={this.props.question.text}/>
          <Answers question={this.props.question} onClick={this.handleAnswer}/>
        </div>
      )
    }
  }
}


QuizPage.propTypes = {
    question: React.PropTypes.object,
    correctAnswer: React.PropTypes.array,
    answered: React.PropTypes.bool
};

this.QuizPage = QuizPage;