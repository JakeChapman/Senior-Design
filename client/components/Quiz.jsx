Quiz = React.createClass({

  getInitialState() {
    return {correctAnswer: {}, answered: false}
  },

  componentDidMount() {
    $("#navQuiz").toggleClass("nonfocus");
    $("#navQuiz").toggleClass("focus");
  },

  componentWillUnmount() {
    $("#navQuiz").toggleClass("nonfocus");
    $("#navQuiz").toggleClass("focus");
  },

  handleAnswer(correct) {
    Actions.questionAnswered({question_id: this.props.question._id._str, user_id: Meteor.userId(), answeredOn: new Date(), correct: correct});
  },

  render() {

    let boundAnswer = this.handleAnswer.bind(this, this.props.question);
    let answerIndex = 1;
    let answerText = 'Some Text';
    let answer = this.props.question.answers.filter(function(answer) {
      return answer.correct
    });

    if (this.state.answered) {
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
});
