this.Settings = React.createClass({

    render(){
        let sDate = this.props.profile.startDate;
        let eDate = this.props.profile.endDate;
        return (
            <table className="ui very basic collapsing celled table">
                <tbody>
                    <tr>
                        <td>
                            <div className="content">
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

});