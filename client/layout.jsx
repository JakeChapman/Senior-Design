Layout = React.createClass({


  render() {
    return (
      <div class="layout-nav-fixed-top" id="layout-nav">
        <Nav/>
      </div>

      <!--Main content will be rendered in the div
      //below, this will be done using the routes.js
      //with the Iron Router package -->
      <div class="main-content-wrapper" id="layout-main-content">
        {{this.props.content}}
      </div>
    )
  }
})
