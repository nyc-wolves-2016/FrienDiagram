class mySidenavmenu extends React.Component {
  renderActiveLinks() {
    if(this.props.current_user) {
      const { id } = this.props.current_user
      return(
        <ul id="slide-out" class="side-nav">
          <li>
            <div class="userView">
              <img class="background" src="images/office.jpg" />
              <a href="#!user">
                <img class="circle" src="images/yuna.jpg" />
              </a>
              <a href="#!name">
                <span class="white-text name">John Doe</span>
              </a>
              <a href="#!email">
                <span class="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
          <li><a href="#!">Second Link</a></li>
          <li><div class="divider"></div></li>
          <li><a class="subheader">Subheader</a></li>
          <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
        </ul>
        <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>
      )
    }
    return (
      <div>
        <a href="javascript:void(0)"onClick={this.closeNav.bind(this)}>&times;</a>
        <a href="/">Home</a>
        <a href="/users/sign_in">Login</a>
        <a href="/users/sign_up">Sign up</a>
        <a href="#">About</a>
      </div>
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
