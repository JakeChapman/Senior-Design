Notes = React.createClass({
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
