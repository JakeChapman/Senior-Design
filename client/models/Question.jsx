Question = React.createClass({
  render() {
    return (
      <div className="card" id="quiz-question">
          {this.props.text}
      </div>
    )
  }
});
