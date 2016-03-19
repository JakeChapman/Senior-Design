this.SettingsContainer = React.createClass({


    getInitialState(){
        return{
            user: User.profile
        }
    },

    componentDidMount() {
        $("#navSettings").toggleClass("nonfocus");
        $("#navSettings").toggleClass("focus");
        if(!Meteor.isCordova){
            $('#start-date').datepicker({
                dateFormat: 'dd-mm-yy',
                altField: '#thealtdate',
                altFormat: 'yy-mm-dd'
            });
            $('#end-date').datepicker({
                dateFormat: 'dd-mm-yy',
            });
        }
    },

    componentWillUnmount() {
        $("#navSettings").toggleClass("nonfocus");
        $("#navSettings").toggleClass("focus");
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

    updateProfile(){
        var QPP = $('#qpp').val();
        var sDate = new Date($('#start-date').val());
        var eDate = new Date($('#end-date').val());
        var sTime = this.parseTime($('#start-time').val());
        var eTime = this.parseTime($('#end-time').val());
        var QPD = Math.round(QPP / (Math.ceil((Math.abs(eDate - sDate)) / (1000 * 3600 * 24))));


        var settings = {
            qpd: QPD,
            qpp: QPP,
            qph: Math.round(QPD / (Math.round((eTime - sTime) / 60))),
            startTime: sTime,
            endTime: eTime,
            startDate: sDate,
            endDate: eDate
        };

        var profile = User.profile();
        var curUser = User.current();
        $.extend(profile, settings);

        Meteor.users.update(curUser._id, {$set: {profile: profile}});
    },

    render() {

        return (
            <div className="ui raised very padded container segment" id="settings-wrapper">

                <h4 id="settingsHeader" className="ui header">Questions Configuration</h4>

                <QPP qpp={this.state.user.QPD}/>

                <div className="ui divider"></div>

                <DateSelect type="start-date"/>

                <div className="ui divider"></div>

                <DateSelect type="end-date"/>

                <div className="ui divider"></div>

                <TimeSelect type="start-time"/>

                <div className="ui divider"></div>

                <TimeSelect type="end-time"/>

                <div className="ui divider"></div>

                <ProfileCalculation />

                <div className="ui divider"></div>

                <button className="ui black basic button" onClick={this.updateProfile}>
                    Save
                </button>

            </div>
        )
    }
});
