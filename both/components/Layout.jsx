Layout = React.createClass({
  render() {
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
  }
});
