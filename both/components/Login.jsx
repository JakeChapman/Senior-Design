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
      <div className="container" id="login-wrapper">
        <form className="form-horizontal" role="form" onSubmit={this.handleLogin}>
          <div className="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 col-lg-10 col-lg-offset-1 col-sm-10 col-sm-offset-1" id="login-form">
            <div className="form-group form-group-lg">
              <label className="control-label col-md-4 col-xs-6 col-sm-4 col-lg-4">
                User Name
              </label>
              <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                <input className="form-control input-lg" id="userEmail" type="email"/>
              </div>
            </div>

            <div className="form-group form-group-lg">
              <label className="control-label col-md-4 col-xs-6 col-sm-4 col-lg-4">
                Password
              </label>
              <div className="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                <input className="form-control input-lg" id="userPassword" type="password"/>
              </div>
            </div>

            <div className="form-group form-group-lg col-md-12 col-xs-12 col-sm-12 col-lg-12">
              <button type="submit" className="btn btn-default col-xs-6 col-sm-6 col-lg-6 col-md-6 col-md-offset-3 col-xs-offset-3 col-sm-offset-3 col-lg-offset-3">Submit</button>
            </div>

            <Registration/>
          </div>
        </form>
      </div>
    )
  }
});
