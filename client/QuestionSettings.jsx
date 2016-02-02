QuestionsSettings = React.createClass({
  getInitialState() {
    return {
      qpp: 0,
      qpd: 0,
      startDate: "",
      endDate: "",
      startTime: "",
      endTime: "",
      timeFrame: ""
    }
  },

  parseTime(s) {
    var c = s.split(':');
    console.log(c[0] + ' ' + c[1]);
    if (c[1].search("p") != -1) {
      console.log("pm");
      return (parseInt(c[0]) + 12) * 60 + parseInt(c[1])
    } else {
      return parseInt(c[0]) * 60 + parseInt(c[1]);
    }
  },

  changeValues() {

    if ($('#qpp').val() != "" || $('#start').val() != "" || $('#end').val() != "" || $('#start-time').val() != "" || $('#end-time').val() != "") {

      var QPP = $('#qpp').val();
      var sDate = new Date($('#start').val());
      var eDate = new Date($('#end').val());
      var sTime = this.parseTime($('#start-time').val());
      var eTime = this.parseTime($('#end-time').val());
      var QPD = Math.round(QPP / (Math.ceil((Math.abs(eDate - sDate)) / (1000 * 3600 * 24))));

      console.log(QPP + ' ' + sDate + ' ' + eDate + ' ' + sTime + ' ' + eTime + ' ' + QPD);

      this.setState({
        qpp: QPP,
        qpd: QPD,
        startDate: sDate,
        endDate: eDate,
        startTime: sTime,
        endTime: eTime,
        timeFrame: Math.round((eTime - sTime) / 60)
      });
    } else {
      bootbox.alert("Please fill out every box");
    }
  },
  getActiveTime() {
    if (this.state.qpp != 0) {
      return this.state.timeFrame;
    }
  },
  getRatio(selector) {
    if (selector === "H") {
      if (this.state.qpp === 0) {
        return 0;
      } else {
        return Math.round(this.state.qpd / this.state.timeFrame);
      }
    } else if (selector === "D") {
      return this.state.qpd;
    }
  },

  updateProfile(){
    var settings = {
      QPD: this.state.qpd,
      QPH: Math.round(this.state.qpd / this.state.timeFrame),
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    Meteor.users.update({_id: Meteor.userId()}, {$set: {profile: settings}});
  },

  render() {
    return (
      <div className="container">

        <div className="form-group" id="qSettings">
          <label className="control-label col-sm-3" for="questions-per-period">
            <i className="zmdi zmdi-help"></i>
            Number of Questions per Period:</label>
          <div className="col-sm-9">
            <input className="form-control" name="questions-per-period" type="numeric" id="qpp"/>
          </div>
        </div>

        <div className="datetimepicker form-group" id="period-settings">
          <label className="control-label col-sm-3" for="start-period">
            <i className="zmdi zmdi-calendar zmdi-hc"></i>
            Start Date:</label>
          <div className="col-sm-9">
            <input className="form-control" id="start" name="start-period" type="date"/>
          </div>
        </div>

        <div className="datetimepicker form-group" id="period-settings">
          <label className="control-label col-sm-3" for="end-period">
            <i className="zmdi zmdi-calendar zmdi-hc"></i>
            End Date:</label>
          <div className="col-sm-9">
            <input className="form-control" id="end" name="end-period" type="date"/>
          </div>
        </div>

        <div className="form-group" id="period-settings">
          <label className="control-label col-sm-3" for="start-time">
            <i className="zmdi zmdi-time zmdi-hc"></i>
            Start Time:</label>
          <div className="col-sm-9">
            <input className="form-control" id="start-time" name="start-time" type="time"/>
          </div>
        </div>

        <div className="form-group" id="period-settings">
          <label className="control-label col-sm-3" for="end-time">
            <i className="zmdi zmdi-time zmdi-hc"></i>
            End Time:</label>
          <div className="col-sm-9">
            <input className="form-control" id="end-time" name="end-time" type="time"/>
          </div>
        </div>

        <div className="form-group col-sm-12">
          <button className="btn btn-default col-sm-6 col-sm-offset-3" onClick={this.changeValues}>Calculate</button>
        </div>

        <div className="form-group col-lg-6 col-lg-offset-4" id="totals">
          <div className="col-sm-12">
            <label className="control-label">
              Total time of Period: Days:
            </label>
            <span className=" label label-default">{this.state.qpp}</span>
          </div>
          <div className="col-sm-12">
            <label className="control-label">
              Number of Hours per Day:
            </label>
            <span className="label label-default">{this.getActiveTime()}</span>
          </div>
          <div className="col-sm-12">
            <label className="control-label">
              Number of Questions per Hour:
            </label>
            <span className="label label-default">{this.getRatio("H")}</span>
          </div>
          <div className="col-sm-12">
            <label className="control-label">
              Number of Questions per Day:
            </label>
            <span className="label label-default">{this.getRatio("D")}</span>
          </div>
        </div>

        <div className="form-group col-sm-12">
          <button type="submit" className="btn btn-default col-sm-6 col-sm-offset-3" onClick={this.updateProfile}>Submit Settings</button>
        </div>

      </div>
    )
  }
});
