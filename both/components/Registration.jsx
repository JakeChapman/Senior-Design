this.Registration = React.createClass({


  registerUser() {
    //retrieve the input field values
    var email = this.props.email;
    var password = this.props.password;
    var profile = {
    };

    var userObject = {
      email: email,
      password: password,
      profile: profile
    };

    Accounts.createUser(userObject, function(err) {
      if (!err) {
        bootbox.alert("Registration Successful");
        FlowRouter.go("/");
      } else {
        bootbox.alert("FAILED TO REGISTER");
      }
    });
    $("#registerModal").modal('hide');
  },

  closeWindow() {
    $("#registerModal").modal('hide');
  },

  render() {
    return (

      <div id="registerModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <input type="text" id="usrName" placeholder="Enter Name Here"/>
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              Do you want to create a new account?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={this.registerUser}>Yes</button>
              <button type="button" className="btn btn-primary" onClick={this.closeWindow}>No</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});
