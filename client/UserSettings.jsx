Settings = React.createClass({
  componentDidMount(){
    $("#navSettings").toggleClass("nonfocus");
    $("#navSettings").toggleClass("focus");
  },

  componentWillUnmount(){
    $("#navSettings").toggleClass("nonfocus");
    $("#navSettings").toggleClass("focus");
  },
  render(){
    return(
      <div className="container" id="settings-wrapper">

          <h4 id="settingsHeader">Questions Configuration</h4>
          <QuestionsSettings/>

        <div id="question-type-options">
          <h3>Type of Questions
          </h3>
          <label><input id="multiple-choice" name="questionType" type="radio" value="multiplechoice"/>Multiple Choice</label>
          <label><input id="short-answer" name="questionType" type="radio" value="shortanswer"/>Short Answer</label>
          <label><input id="combination" name="questionType" type="radio" value="both"/>Both Multiple and Short Answer</label>
        </div>

        <div id="engine">
          <label className="block"><input id="startStudyLockButton" name="startStudyLock" type="button" value="Start Study Lock"/></label>
          <label className="block"><input id="stopStudyLockButton" name="stopStudyLock" type="button" value="Stop Study Lock"/></label>
        </div>
      </div>
    )
  }
})
