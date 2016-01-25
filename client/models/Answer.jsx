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

  checkAnswer(){
    this.setState({selected: true});
    this.props.onClick();
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
    console.log(this.props.text);
    return (
      <button type="button" className="btn btn-default btn-sm btn-answer" style={btnColor} onClick={this.checkAnswer}>{this.props.text}</button>
    )
  }
});
