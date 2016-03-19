this.DateSelect = React.createClass({


    render(){
        return(

            <div className="ui labeled input">
                <div className="ui label">
                    {this.props.type === "start-date" ? "Start Date:" : "End Date:" }
                </div>
                <input id={this.props.type} type="date"/>
            </div>

        )
    }

});