this.Test = React.createClass({

    testScrape(){
        Meteor.call("Scrape.test");
    },

    render(){
        return(
            <div clasName="container">

                <div className="ui large header">Give Website name</div>

                <div className="ui large input">
                    <input type="text"  id="webURL"/>
                </div>

                <button onClick={this.testScrape} className="btn btn-primary">Run Web Scrape</button>

            </div>
        )
    }
});