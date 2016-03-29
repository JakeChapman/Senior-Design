Answers = React.createClass({

  getInitialState() {
    return {index: 0}
  },

  renderOptions() {
    return this.props.question.answers.map((option) => {
      var boundClick = this.handleClick.bind(this, option);
      return <Answer onClick={boundClick} key={option.index} text={option.answer} correct={option.correct}/>
    });
  },

  handleClick(guess){
    if(guess.correct){
      alert("Correct");
      this.props.onClick(true, this.props.question);
    }else{
      alert("Incorrect");
      this.props.onClick(false, this.props.question);
    }
  },

  render() {
    return (
        <div className="ui raised container segment">
          <div className="large ui vertical buttons">
            {this.renderOptions()}
          </div>
        </div>
    )
  }
});
