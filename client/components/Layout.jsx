Layout = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {user: Meteor.user()}
  },

  render() {

    if (this.data.user) {
      return (
        <div className="wrapper">
          <div className="layout-nav-fixed-top" id="layout-nav">
            <Nav/>
          </div>

          <div className="main-content-wrapper" id="layout-main-content">
            {this.props.content}
          </div>
        </div>
      )
    } else {
      return <Login/>
    }
  }
});
