Login = React.createClass({

  handleLogin(event) {
    event.preventDefault();
    //retrieve the input field values
    var email = $('#userEmail').val();
    var password = $('#userPassword').val();

    //Trim and validate your fields here....
    email = this.trimInput(email);
    console.log(email);
    Meteor.loginWithPassword(email, password, function(err) {
      if (!err) {
        bootbox.alert("Login Successful");
        FlowRouter.go('/');
      } else {
        $("#registerModal").modal('show');
      }
    });
  },

  handleNewUser(event) {
    console.log("going to registration");
    //  FlowRouter.go('/registration');
  },

  trimInput(val) {
    return val.replace(/^\s*|\s*$/g, "");
  },

  render() {

    return (
      <div className="container center_div" id="login-wrapper">
        <form className="form-horizontal" role="form" onSubmit={this.handleLogin}>
          <div className="col-md-6 col-md-offset-3" id="login-form">
            <div className="form-group">
              <label className="control-label col-md-4">
                User Name
              </label>
              <div className="col-md-6">
                <input className="form-control" id="userEmail" type="email"/>
              </div>
            </div>

            <div className="form-group">
              <label className="control-label col-md-4">
                Password
              </label>
              <div className="col-md-6">
                <input className="form-control" id="userPassword" type="password"/>
              </div>
            </div>

            <div className="form-group col-md-12">
              <button type="submit" className="btn btn-default col-md-4 col-md-offset-4">Submit</button>
            </div>

            <Registration/>
          </div>
        </form>
      </div>
    )
  }
})
