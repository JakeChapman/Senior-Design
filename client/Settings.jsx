Settings = React.createClass({

  render(){
    return(
      <div className="container" id="settings-wrapper">

        <div id="question-configuration">
          <h3>Questions Configuration</h3>
          <div id="qpp-settings">
            <label for="questions-per-period" id="QPP">
              <i className="zmdi zmdi-help zmdi-hc"></i>
              Number of Questions per Period:</label>
            <input id="QPP-value" name="questions-per-period" type="numeric"/>
          </div>

          <div className="datetimepicker" id="period-settings">
            <label for="start-period">
              <i className="zmdi zmdi-calendar zmdi-hc"></i>
              Start Date:</label>
            <input id="start" name="start-period" type="date"/>
          </div>

          <div className="datetimepicker" id="period-settings">
            <label for="end-period">
              <i className="zmdi zmdi-calendar zmdi-hc"></i>
              End Date:</label>
            <input id="end" name="end-period" type="date"/>
          </div>

          <div id="period-settings">
            <label for="start-time">
              <i className="zmdi zmdi-time zmdi-hc"></i>
              Start Time:</label>
            <input id="start-time" name="start-time" type="time"/>
          </div>

          <div id="period-settings">
            <label for="end-time">
              <i className="zmdi zmdi-time zmdi-hc"></i>
              End Time:</label>
            <input id="end-time" name="end-time" type="time"/>
          </div>

          <div id="totals">
            Total time of Period:

            Days
            <br/>
            Number of Hours per Day:

            <br/>
            Number of Questions per Hour:

            <br/>
            Number of Questions per Day:

          </div>
        </div>

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
