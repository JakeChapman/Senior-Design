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

    performParse(evt){
        console.log("Trying  to import here");
        var file = evt.target.files[0];
        var data = "";
        var test = Papa.parse(file, {
            delimiter: "|",
            skipEmptyLines: true,
            complete: function(results){
                console.log(results.data);
            }
            });
        console.log(test);
        //var attachment = $("#importBtn").filename;
        //var parsedAttachment = Papa.parse(attachment, config);
        //$("#file-text").value = parsedAttachment;
    },

  render(){
    return(
        <div className="container" id="notes-wrapper">
          <div className="ui raised container segment" id="notes-container">
              <div className="ui large input">
                <input type="file" id="csv-file" name="file" onChange={this.performParse}/>
              </div>
          </div>
            <div className="ui raised container segment">
                Notes Log goes here
            </div>
        </div>
    )
  }
});
