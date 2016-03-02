this.Test = React.createClass({

    testScrape(){
        Meteor.call("Scrape.test");
    },

    render(){
        return(
            <div clasName="container">
                <button onClick={this.testScrape} className="btn btn-primary">Run Test</button>
            </div>
        )
    }
});