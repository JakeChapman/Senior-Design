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

      let profile = User.profile;
      let topCard = (profile.qpd != 0 ? <Settings profile={profile}/> : <QuestionSetup/>);

    return (
      <div className="container" id="log-wrapper">

        <div className="ui raised container segment" id="profile-overview">
            {topCard}
        </div>

        <div className="ui raised container segment" id="profile-log">
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