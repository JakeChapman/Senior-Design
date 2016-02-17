Answer = React.createClass({

  getInitialState(){
    return {
      selected: false,
      btnTag: ""
    }
  },

  componentDidMount(){
    this.setState({btnTag: this.props.key});
  },

  checkAnswer(correct){
    this.setState({selected: true});
    this.props.onClick(correct);
  },

  render() {

    let btnColor;

    if(this.state.selected && this.props.correct){
      btnColor = {
        backgroundColor: 'green'
      };
    }else if (this.state.selected && !this.props.correct) {
      btnColor = {
        backgroundColor: 'red'
      };
    }else {
      btnColor = {
        backgroundColor: 'white'
      };
    }
    return (
      <button type="button" className="btn btn-default btn-sm btn-answer" style={btnColor} onClick={this.checkAnswer}>{this.props.text}</button>
    )
  }
});
