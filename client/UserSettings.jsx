Settings = React.createClass({
  componentDidMount() {
    $("#navSettings").toggleClass("nonfocus");
    $("#navSettings").toggleClass("focus");
  },

  componentWillUnmount() {
    $("#navSettings").toggleClass("nonfocus");
    $("#navSettings").toggleClass("focus");
  },
  render() {
    return (
      <div className="container" id="settings-wrapper">

        <h4 id="settingsHeader">Questions Configuration</h4>

        <QuestionsSettings/>

      </div>
    )
  }
})
