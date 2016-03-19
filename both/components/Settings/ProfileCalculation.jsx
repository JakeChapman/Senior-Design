this.ProfileCalculation = React.createClass({

    getInitialState() {
        return {
            qpp: 0,
            qpd: 0,
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            timeFrame: ""
        }
    },

    parseTime(s) {
        var c = s.split(':');
        console.log(c[0] + ' ' + c[1]);
        if (c[1].search("p") != -1) {
            console.log("pm");
            return (parseInt(c[0]) + 12) * 60 + parseInt(c[1])
        } else {
            return parseInt(c[0]) * 60 + parseInt(c[1]);
        }
    },

    changeValues() {

        if ($('#qpp').val() != "" || $('#start').val() != "" || $('#end').val() != "" || $('#start-time').val() != "" || $('#end-time').val() != "") {

            var QPP = $('#qpp').val();
            var sDate = new Date($('#start-date').val());
            var eDate = new Date($('#end-date').val());
            var sTime = this.parseTime($('#start-time').val());
            var eTime = this.parseTime($('#end-time').val());
            var QPD = Math.round(QPP / (Math.ceil((Math.abs(eDate - sDate)) / (1000 * 3600 * 24))));

            console.log(QPP + ' ' + sDate + ' ' + eDate + ' ' + sTime + ' ' + eTime + ' ' + QPD);

            this.setState({
                qpp: QPP,
                qpd: QPD,
                startDate: sDate,
                endDate: eDate,
                startTime: sTime,
                endTime: eTime,
                timeFrame: Math.round((eTime - sTime) / 60)
            });
        } else {
            bootbox.alert("Please fill out every box");
        }
    },
    getActiveTime() {
        if (this.state.qpp != 0) {
            return this.state.timeFrame;
        }
    },
    getRatio(selector) {
        if (selector === "H") {
            if (this.state.qpp === 0) {
                return 0;
            } else {
                return Math.round(this.state.qpd / this.state.timeFrame);
            }
        } else if (selector === "D") {
            return this.state.qpd;
        }
    },

    render(){
        return(
            <div id="totals-table">
                <button className="ui black basic button" onClick={this.changeValues}>Calculate</button>

                <table className="ui very basic collapsing celled table">

                    <thead>
                        <tr>
                            <th>Calculation Type</th>
                            <th>Value</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className="content">
                                    Total time of Period
                                </div>
                            </td>
                            <td>
                                {this.state.qpp}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Number of Hours Per Day
                                </div>
                            </td>
                            <td>
                                {this.getActiveTime()}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Number of Questions per Hour
                                </div>
                            </td>
                            <td>
                                {this.getRatio("H")}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="content">
                                    Number of Questions per Day
                                </div>
                            </td>
                            <td>
                                {this.getRatio("D")}
                            </td>
                        </tr>
                    </tbody>

                </table>

            </div>
        )
    }
});