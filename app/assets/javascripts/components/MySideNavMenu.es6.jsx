class mySidenavmenu extends React.Component {
  renderActiveLinks() {
    if(this.props.current_user) {
      const { id } = this.props.current_user
      return(
          <ul id="slide-out" className="side-nav fixed">
            <li>
              <div className="userView">
                {/* <img className="background" src="images/office.jpg" /> */}
                <a href="#!user"/>
                  {/* <img className="circle" src="images/yuna.jpg" /> */}
                <img className="background"/>
                <a href="#!user">
                  <img className="circle"/>
                </a>
                <a href="#!name">
                  <span className="white-text name">John Doe</span>
                </a>
                <a href="#!email">
                  <span className="white-text email">jdandturk@gmail.com</span>
                </a>
              </div>
            </li>
            <li><a className="waves-effect" href="/"><i className="material-icons">cloud</i>Dashboard</a></li>
            <li><div className="divider"></div></li>
            <li><a className="waves-effect" href="#!">Add an address</a></li>
            <li><a className="waves-effect" href="#!">Add a Friend</a></li>
            <li><a className="waves-effect" href="/events">Create New Event</a></li>
            <li><a className="waves-effect" data-method="delete" href="/users/sign_out">Log out</a></li>
          </ul>
      )
    }
    return (
      <ul id="slide-out" className="side-nav fixed">
        <li>
          <div className="userView">
            {/* <img className="background" src="images/office.jpg" /> */}
            <a href="#!user">
              {/* <img className="circle" src="images/yuna.jpg" /> */}
            </a>
            <a href="#!name">
              <span className="white-text name">John Doe</span>
            </a>
            <a href="#!email">
              <span className="white-text email">jdandturk@gmail.com</span>
            </a>
          </div>
        </li>
        <li><a href="/"><i className="material-icons">cloud</i>Home</a></li>
        <li><a href="/users/sign_in">Login</a></li>
        <li><div className="divider"></div></li>
        <li><a href="/users/sign_up">Sign up</a></li>
        <li><a className="waves-effect" href="#!">About</a></li>
      </ul>
    )
  }

  render() {
    return(
      <div>
        {this.renderActiveLinks()}
      </div>
    );
  }
}
