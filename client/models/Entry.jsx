Entry = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      question: Questions.findOne(new Meteor.Collection.ObjectID(this.props.log.question_id._str))
    };
  },

  render() {
    if (typeof this.data.question == "undefined") {
      return (
        <div className="card">
          No result
        </div>
      )
    } else {
      return (
        <div className="card">
          <div id="result">
            {this.props.log.correct
              ? "Correct"
              : "Wrong"}
          </div>
          <div id="qText">
            {this.data.question.text}
          </div>
        </div>
      )
    }
  }
});
