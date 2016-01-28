Login = React.createClass({

  render() {
    return (
      <form className="form-horizontal" role="form">

        <div className="form-group">
          <label className="control-label col-md-4">
            User Name
          </label>
          <div className="col-md-6">
            <input className="form-control" type="email"/>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-4">
            Password
          </label>
          <div className="col-md-6">
            <input className="form-control" type="password"/>
          </div>
        </div>

        <div className="form-group">
          <div className="col-md-offset-4 col-md-10">
            <button type="submit" className="btn btn-default">Submit</button>
          </div>
        </div>

      </form>
    )
  }
})
