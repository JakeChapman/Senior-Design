Quiz = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {question: Questions.findOne({})};
  },

  getInitialState() {
    return {correctAnswer: {}, answered: false}
  },

  componentDidMount() {
    $("#navQuiz").toggleClass("nonfocus");
    $("#navQuiz").toggleClass("focus");
    this.setState({
      correctAnswer: this.data.question.answers.filter(function(answer) {
        return answer.correct
      })
    });
  },

  componentWillUnmount() {
    $("#navQuiz").toggleClass("nonfocus");
    $("#navQuiz").toggleClass("focus");
  },

  handleAnswer() {
    alert("wasssup boooooi");
    this.setState({answered: true});
  },

  render() {

    var boundAnswer = this.handleAnswer.bind(this, this.data.question);

    console.log(this.state.correctAnswer);

    if (this.state.answered) {

      let answerText = this.state.correctAnswer[0].answer;
      let answerIndex = this.state.correctAnswer[0].index;

      return (
        <div className="container" id="quiz-wrapper">
          <Question text={this.data.question.text}/>
          <div className="correctAnswer">
            <Answer key={answerIndex} text={answerText} correct={true}/>
          </div>
          <div className="card" id="rationale">
            {this.data.question.rationale}
          </div>
        </div>
      )
    } else {
      return (
        <div className="container" id="quiz-wrapper">
          <Question text={this.data.question.text}/>
          <Answers question={this.data.question} onClick={boundAnswer}/>
        </div>
      )
    }
  }
});
