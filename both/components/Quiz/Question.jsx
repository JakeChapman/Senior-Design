Question = React.createClass({
  render() {
    return (
      <div className="ui huge raised container segment" >
          <div className="ui medium center aligned header" id="qText">
            {this.props.text}
          </div>
      </div>
    )
  }
});
