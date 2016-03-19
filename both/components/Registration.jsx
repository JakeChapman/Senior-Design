this.Registration = React.createClass({

    registerUser(event) {
        //retrieve the input field values
        var email = this.props.email;
        var password = this.props.password;
        var userObject = {
            email: email,
            password: password,
            profile: {
            name: $("#name").val(),
            qpp: 0,
            qpd: 0,
            qph: 0,
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            timeFrame: ""
            }
        };

        Accounts.createUser(userObject, function(err) {
            if (!err) {
                ReactLayout.render(Layout, {content: <LogContainer/>});
            } else {
                console.log("Failed to register");
            }
        });
    },

    render() {
        return (
                <div className="ui raised very padded text container segment">
                    <h2 className="ui header">Please Enter Name</h2>

                    <div className="ui labeled input">
                        <div className="ui label">
                            Name
                        </div>
                        <input id="name" type="text" />
                    </div>

                    <div className="ui divider"></div>

                    <button className="ui black basic button" id="registerBtn" onClick={this.registerUser}>Register</button>
                </div>
        )
    }
});
