Notes = React.createClass({

    getInitialState(){
        return{
            timer_id: ""
        }
    },

    componentDidMount(){
    $("#navNotes").toggleClass("nonfocus");
    $("#navNotes").toggleClass("focus");

      this.setState({timer_id: Meteor.setInterval(function(){
          console.log("just working here");
      }, 5000)});
  },

  componentWillUnmount(){
    $("#navNotes").toggleClass("nonfocus");
    $("#navNotes").toggleClass("focus");
      Meteor.clearInterval(this.state.timer_id);
  },
  render(){
    return(
      <div className="container" id="notes-container">

        <div className="fileUpload btn btn-primary notes-import myFileInput" id="importBtn">
            <span>Upload Notes</span>
            <input id="uploadBtn" type="file" className="upload" />
        </div>

        <div className="notes-section">
          <p id="file-text"></p>
        </div>

      </div>
    )
  }
});
