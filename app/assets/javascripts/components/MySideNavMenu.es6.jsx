class mySidenavmenu extends React.Component {
  renderActiveLinks() {
    if(this.props.current_user) {
      const { id } = this.props.current_user
      return(
        <ul id="slide-out" className="side-nav fixed">
          <li>
            <div className="userView">
              <img className="background" src="images/office.jpg" />
              <a href="#!user">
                <img className="circle" src="images/yuna.jpg" />
              </a>
              <a href="#!name">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="#!email">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div className="divider"></div></li>
          <li><a className="subheader">Subheader</a></li>
          <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
      )
    }
    return (
      // <div>
      //   <a href="javascript:void(0)" >&times;</a>
      //   <a href="/">Home</a>
      //   <a href="/users/sign_in">Login</a>
      //   <a href="/users/sign_up">Sign up</a>
      //   <a href="#">About</a>
      // </div>

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
        <li><a href="/users/sign_up">Sign in</a></li>
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
