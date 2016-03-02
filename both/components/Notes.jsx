Notes = React.createClass({
  componentDidMount(){
    $("#navNotes").toggleClass("nonfocus");
    $("#navNotes").toggleClass("focus");
  },

  componentWillUnmount(){
    $("#navNotes").toggleClass("nonfocus");
    $("#navNotes").toggleClass("focus");
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
      <div className="container" id="notes-container">
          <input type = "file" id="csv-file" name="file" onChange={this.performParse}/>
      </div>
    )
  }
});
