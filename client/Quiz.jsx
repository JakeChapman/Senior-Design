Quiz = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData(){
    return {
      question: Questions.find({}).fetch()
    };
  },

  render() {
    return (
      <div className="container" id="quiz-wrapper">
        <div id="quiz-question">
          <div id="question">
            Some Question Here
          </div>
        </div>
        <div id="answer-box">
          <input id="answer_field" type="text"/>
          <input id="answer_button" type="button" value="Submit Answer"/>
        </div>

        <div className="card" id="rationale"></div>
      </div>
    )
  }
})
