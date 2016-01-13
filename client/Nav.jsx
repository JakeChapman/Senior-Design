Nav = React.createClass({


  render(){
    return(
      <div className="navbar navbar-main navbar-default navbar-fixed-top" id='navbar-top'>

        <ul className="nav navbar-nav">
          <div id="navItem">
            <li>
              <a href="/">
                <i className="zmdi zmdi-home zmdi-hc-2x" id="navHome"></i>
              </a>
            </li>
          </div>
          <div id="navItem">
            <li>
              <a href="/quiz">
                <i className="zmdi zmdi-help zmdi-hc-2x"></i>
              </a>
            </li>
          </div>
          <div id="navItem">
            <li>
              <a href="/notes">
                <i className="zmdi zmdi-file-text zmdi-hc-2x"></i>
              </a>
            </li>
          </div>
          <div id="navItem">
            <li>
              <a href="/settings">
                <i className="zmdi zmdi-settings zmdi-hc-2x" id="navLink"></i>
              </a>
            </li>
          </div>
        </ul>

      </div>
    )
  }
})
