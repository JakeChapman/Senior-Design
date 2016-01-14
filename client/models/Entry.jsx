Entry = React.createClass({

  mixins:[ReactMeteorData],

  getMeteorData(){
    console.log(this.props.question_id._str);

    var param = this.props.question_id;

    return {
      question: Questions.findOne({_id: param})
    };
  },

  render(){
    return(
      <div className="card">
        {this.data.question.text}
      </div>
    );
  }

});
