class LogList extends React.Component {
    render() {
        console.log("[FeedList] Rendering");
        return (
            <div>
                {this.props.logItems.map(entry => {
                    let curId = new Meteor.Collection.ObjectID(entry.question_id);
                    let question = LogDomain.getQuestionFromLog(curId);
                    return <Entry key={entry._id} log={entry} question={question}/>;
                })}
            </div>
        );
    }
}

LogList.propTypes = {
    logItems: React.PropTypes.array
};

this.LogList = LogList;
