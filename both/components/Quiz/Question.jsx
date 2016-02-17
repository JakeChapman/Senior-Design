Question = React.createClass({
  render() {
    return (
      <div className="card" id="quiz-question">
          <div id="qText">
            {this.props.text}
          </div>
      </div>
    )
  }
});
