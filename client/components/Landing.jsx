//Javascript for chart below
function drawChart() {
  var data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    datasets: [
      {
        label: "Questions",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [
          65,
          59,
          80,
          81,
          56,
          55,
          40
        ]
      }, {
        label: "Correct Answers",
        fillColor: "rgba(151,187,205,0.5)",
        strokeColor: "rgba(151,187,205,0.8)",
        highlightFill: "rgba(151,187,205,0.75)",
        highlightStroke: "rgba(151,187,205,1)",
        data: [
          28,
          48,
          40,
          19,
          50,
          54,
          39
        ]
      }
    ]
  };
  var options = {
    //Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
    scaleBeginAtZero: true,

    //Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(0,0,0,.05)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - If there is a stroke on each bar
    barShowStroke: true,

    //Number - Pixel width of the bar stroke
    barStrokeWidth: 2,

    //Number - Spacing between each of the X value sets
    barValueSpacing: 5,

    //Number - Spacing between data sets within X values
    barDatasetSpacing: 1,

    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"

  };

  var ctx = document.getElementById("activitiesChart").getContext("2d");
  var myBarChart = new Chart(ctx).Bar(data, options);
};

Landing = React.createClass({

  getInitialState() {
    return {active: false};
  },
  componentDidMount() {
    $("#navHome").toggleClass("nonfocus");
    $("#navHome").toggleClass("focus");
    drawChart();
  },

  componentWillUnmount() {
    $("#navHome").toggleClass("nonfocus");
    $("#navHome").toggleClass("focus");
  },

  renderHistory() {
    return this.props.userLog.map((entry) => {
      return <Entry key={entry._id} log={entry}/>;
    });
  },

  render() {
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
          <div id="profile-records">
            <canvas id="activitiesChart"></canvas>
          </div>
        </div>
        <h4 className="entryList">Jane Doe&#39;s Activity</h4>

        <div className="container" id="log-wrapper">
          {this.renderHistory()}
        </div>

      </div>
    )
  }
})
