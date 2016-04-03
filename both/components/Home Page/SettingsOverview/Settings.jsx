this.Settings = React.createClass({

    render(){
        let sDate = this.props.profile.startDate;
        let eDate = this.props.profile.endDate;
        return (

            <table className="ui very basic table">

                <tbody>
                    <tr className="center aligned">
                        <td>
                            Questions Per Day
                        </td>
                        <td>
                            {this.props.profile.qpd}
                        </td>
                        <td>
                            Questions Per Hour
                        </td>
                        <td>
                            {this.props.profile.qph}
                        </td>
                    </tr>
                    <tr className="center aligned">
                        <td>
                            Active Time Frame
                        </td>
                        <td>
                            {this.props.profile.startTime} - {this.props.profile.endTime}
                        </td>
                        <td>
                            Active Date Frame
                        </td>
                        <td>
                            {this.props.profile.startDate} - {this.props.profile.endDate}
                        </td>
                    </tr>
                </tbody>
            </table>

        )
    }

});