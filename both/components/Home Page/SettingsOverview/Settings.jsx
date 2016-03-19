this.Settings = React.createClass({

    render(){
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className="ui label">
                        Questions per Day
                        <div className="detail">{this.props.profile.qpd}</div>
                    </div>
                </div>
            </div>
        )
    }

});