Entry = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      question: Questions.findOne(new Meteor.Collection.ObjectID(this.props.log.question_id))
    };
  },

  render() {
      var logText;
      if(typeof  this.props.question === 'undefined'){
          logText = <div></div>;
      }else{
          logText = <div id="qText">
                        {this.props.question.text}
                    </div>
      }

      return (
        <div className="card">
          <div id="result">
            {this.props.log.correct
              ? "Correct"
              : "Wrong"}
          </div>
            {logText}
        </div>
      )
  }
});
