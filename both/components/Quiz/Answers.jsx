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
      alert("GOOD JOB");
      this.props.onClick(true, this.props.question);
    }else{
      alert("TRY HARDER");
      this.props.onClick(false, this.props.question);
    }
  },

  render() {
    return (
      <div className="btn-group-vertical" id="answers">
        {this.renderOptions()}
      </div>
    )
  }
});
