this.Settings = React.createClass({

    render(){
        let sDate = this.props.profile.startDate.toISOString().split("T");
        let eDate = this.props.profile.endDate.toISOString().split("T");
        return (
            <div className="ui three column grid" id="settings-overview">
                <div className="row">
                    <div className="ui label">
                        Questions per Period
                        <div className="detail">{this.props.profile.qpp}</div>
                    </div>
                    <div className="ui label">
                        Questions per Hour
                        <div className="detail">{this.props.profile.qph}</div>
                    </div>
                    <div className="ui label">
                        Questions per Day
                        <div className="detail">{this.props.profile.qpd}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="ui label">
                        Start Time - End Time
                        <div className="detail">{this.props.profile.startTime} - {this.props.profile.endTime}</div>
                    </div>
                    <div className="ui label">
                        Start Date - End Date
                        <div className="detail">{sDate[0]} - {eDate[0]}</div>
                    </div>
                </div>
            </div>
        )
    }

});