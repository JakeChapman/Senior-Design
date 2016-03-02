Entry = React.createClass({

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
