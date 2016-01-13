Landing = React.createClass({

  componentDidMount(){
    console.log("HERE");
    drawChart();
  },

  render(){
    return(
      <div className="container" id="feed-wrapper">

        <div className="card" id="profile-overview">
          <div id="profile-picture">
            <img src="generic_profile.png" alt="profile" />
          </div>
          <div id="profile-stats">
            <h5>Name: Sean Bostic</h5>
            <h5>Classes: Some Stuff</h5>
            <h5>Friends: None</h5>
          </div>
        </div>

        <div className="card" id="profile-log">
          <div id="profile-records">
            <canvas id="activitiesChart"></canvas>
          </div>
        </div>

        <div className="card"  id="activity-feed-wrapper">
          <table className="table table-striped">
            Stuff
          </table>
        </div>

      </div>
    )
  }
})
