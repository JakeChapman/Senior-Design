Answer = React.createClass({

  getInitialState(){
    return {
      selected: false,
      btnTag: ""
    }
  },

  componentDidMount(){
    this.setState({btnTag: this.props.key});
    if(typeof this.props.style != 'undefined'){
      console.log("adding style");
      $(this).css(this.props.style);
    }
  },

  checkAnswer(correct){
    this.setState({selected: true});
    this.props.onClick(correct);
  },

  render() {
    return (
      <button className="ui button"  onClick={this.checkAnswer}>{this.props.text}</button>
    )
  }
});
