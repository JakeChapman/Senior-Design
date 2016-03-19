this.TimeSelect = React.createClass({


    render(){
        return(

            <div className="ui labeled input">
                <div className="ui label">
                    {this.props.type === "start-time" ? "Start Time:" : "End Time:" }
                </div>
                <input id={this.props.type} type="time"/>
            </div>

        )
    }

});