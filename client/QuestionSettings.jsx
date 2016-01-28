QuestionsSettings = React.createClass({
  getInitialState() {
    return {qpp: 0, startDate: "", endDate: "", startTime: "", endTime: ""}
  },

  changeValues(){
  },

  render() {
    return (
      <form className="form-horizontal" role="form">

        <div className="form-group" id="qSettings">
          <label className="control-label col-sm-2 zmdi zmdi-help" for="questions-per-period">
            Number of Questions per Period:</label>
          <div className="col-sm-10">
            <input className="form-control" name="questions-per-period" type="numeric" onChange={this.changeValues}/>
          </div>
        </div>

        <div className="datetimepicker form-group" id="period-settings">
          <label className="control-label col-sm-2" for="start-period">
            <i className="zmdi zmdi-calendar zmdi-hc"></i>
            Start Date:</label>
          <div className="col-sm-10">
            <input className="form-control" id="start" name="start-period" type="date"/>
          </div>
        </div>

        <div className="datetimepicker form-group" id="period-settings">
          <label className="control-label col-sm-2" for="end-period">
            <i className="zmdi zmdi-calendar zmdi-hc"></i>
            End Date:</label>
          <div className="col-sm-10">
            <input className="form-control" id="end" name="end-period" type="date"/>
          </div>
        </div>

        <div className="form-group" id="period-settings">
          <label className="control-label col-sm-2" for="start-time">
            <i className="zmdi zmdi-time zmdi-hc"></i>
            Start Time:</label>
          <div className="col-sm-10">
            <input className="form-control" id="start-time" name="start-time" type="time"/>
          </div>
        </div>

        <div className="form-group" id="period-settings">
          <label className="control-label col-sm-2" for="end-time">
            <i className="zmdi zmdi-time zmdi-hc"></i>
            End Time:</label>
          <div className="col-sm-10">
            <input className="form-control" id="end-time" name="end-time" type="time"/>
          </div>
        </div>

        <div className="form-group" id="totals">
          <div className="col-sm-6">
            <label className="control-label">
              Total time of Period: Days:
            </label>
            <span className=" label label-default">{this.state.qpp}</span>
          </div>
          Number of Hours per Day:

          <br/>
          Number of Questions per Hour:

          <br/>
          Number of Questions per Day:

        </div>
      </form>
    )
  }
});
