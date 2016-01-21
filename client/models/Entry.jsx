Entry = React.createClass({

  mixins:[ReactMeteorData],

  getMeteorData(){

    var param = this.props.question_id;


    return {
      question: Questions.findOne(param)
    };
  },

  render(){

    return(
      <div className="card">
        {this.data.question.text}
      </div>
    )
  }

});
