Notes = React.createClass({
  componentDidMount(){
    $("#navNotes").toggleClass("nonfocus");
    $("#navNotes").toggleClass("focus");
  },

  componentWillUnmount(){
    $("#navNotes").toggleClass("nonfocus");
    $("#navNotes").toggleClass("focus");
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
})
