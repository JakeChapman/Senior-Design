// LogData handles all data subscriptions and pushes data down to
// children via props.
//
// This component is a container or 'view controller' and will gather
// any data needed from the domain objects and handle subscriptions
//
// In a future version the children will be able to specify what fields
// they need, however currently they're stored in this component.

/*global LogList, ReactMeteorData, LogDomain */

this.LogContainer = React.createClass({

    mixins: [ReactMeteorData],

    getInitialState(){
        return {
            recordCount: {
                logs: 10
            }
        }
    },

    // subscribe to a reactive stream of data from
    // publication at:  server/publications.jsx
    startMeteorSubscriptions() {
        var userId = User.id();
        var recordCount = this.state.recordCount;
        return Meteor.subscribe("log", recordCount, userId);
    },

    // re-renders view if any reactive data source changes. `sub` is reactive
    // and will change when any new data is availible from subscription.
    getMeteorData: function() {
        var sub = this.startMeteorSubscriptions();

        return {
            logReady: sub.ready(),
            logItems: LogDomain.getQuestionLog()
        };
    },

    render() {
        return (
            <Landing logItems={this.data.logItems}/>
        )
    }
});