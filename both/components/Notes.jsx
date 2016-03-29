Notes = React.createClass({

    componentDidMount(){
        $("#navNotes").toggleClass("nonfocus");
        $("#navNotes").toggleClass("focus");
  },

  componentWillUnmount(){
    $("#navNotes").toggleClass("nonfocus");
    $("#navNotes").toggleClass("focus");
  },

    sendNotification(){
    },
    performParse(evt){
        console.log("Trying  to import here");
        var file = evt.target.files[0];
        var data = "";
        var test = Papa.parse(file, {
            delimiter: "|",
            skipEmptyLines: true,
            complete: function(results){
                var newQuestions = [];
                var data = results.data;
                for(var index = 0; index < data.length; index++){
                    for(var innerCount = 0; innerCount < data[index].length; innerCount++){
                        if(data[index][innerCount] != "\n" && data[index][innerCount] != ""){
                            newQuestions.push(data[index][innerCount].split(/[ABCD]\.\s/g));
                        }

                    }
                }

                console.log(newQuestions);
            }
            });

        //var attachment = $("#importBtn").filename;
        //var parsedAttachment = Papa.parse(attachment, config);
        //$("#file-text").value = parsedAttachment;
    },

    getResults(data){
        var results = [];

        for(var index = 0; index < data.length; index++){
            if(data[index] != "/n" && data[index] != ""){
                results.push(data[index].split(/[A-D]./));
            }
        }

        console.log(results);
    },

  render(){
    return(
        <div className="container" id="notes-wrapper">
          <div className="ui raised container segment" id="notes-container">
              <div className="ui large header">Upload File Here</div>
              <div className="ui large input">
                <input type="file" id="csv-file" name="file" onChange={this.performParse}/>
              </div>
          </div>
            <div className="ui raised container segment">
                <Test/>
            </div>
            <div className="ui raised container segment">
                <div className="ui large header">Question Importer How To</div>
                <p>
                    Please follow the follow guidelines when importing questions <br/>
                    <br/>
                    <br/>
                    1. Separate all questions using the '|' character <br/>
                    2. Make sure each Answer is marked by a capital A,B,C, or D followed immediately by a period. <br/>
                    3. Make sure the correct answer is marked by using the keyword 'correct' at the end of the answer text. <br/>
                    4. Finally, please make sure uploaded files are in the .txt extension.
                </p>

                <button className="ui black button" onClick={this.sendNotification}>Send Notification</button>
            </div>

        </div>
    )
  }
});
