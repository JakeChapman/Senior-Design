class Landing extends React.Component{

  componentDidMount() {
    $("#navHome").toggleClass("nonfocus");
    $("#navHome").toggleClass("focus");
      LogDomain.drawChart();
  }

  componentWillUnmount() {
    $("#navHome").toggleClass("nonfocus");
    $("#navHome").toggleClass("focus");
  }

  renderHistory() {
    console.log(this.state.userLog);
      if(this.state.userLog === {}){
          return <div></div>
      }else {
          return this.state.userLog.map((entry) => {
              return <Entry key={entry._id} log={entry}/>;
          });
      }
  }

    getCtx(){
        return document.getElementById("activitiesChart").getContext("2d");
    }

  render() {

    //this.setState({userLog: State.get('userLog')});

    return (
      <div className="container" id="log-wrapper">

        <div className="card" id="profile-overview">
          <div id="profile-picture">
            <img src="generic_profile.png" alt="profile"/>
          </div>
          <div id="profile-stats">
            <h5>Name: Sean Bostic</h5>
            <h5>Classes: Some Stuff</h5>
            <h5>Friends: None</h5>
          </div>
        </div>

        <div className="card" id="profile-log">
            <h2>Weekly Log</h2>
            <div id="profile-chart">
                <canvas id="activitiesChart"></canvas>
            </div>
        </div>
        <h4 className="entryList">{User.name()}'s Activity</h4>

        <div className="container" id="log-wrapper">
          <LogList logItems={this.props.logItems}/>
        </div>

      </div>
    )
  }
};

this.Landing = Landing;