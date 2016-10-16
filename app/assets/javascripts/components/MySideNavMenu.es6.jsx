class mySidenavmenu extends React.Component {
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.marginLeft= "100px";
    document.body.style.backgroundColor = "white";
  }
  renderActiveLinks() {
    if(this.props.current_user) {
      const { id } = this.props.current_user
      return(
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <a href="/">Home</a>
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="/friendships/new">Find New Friend</a>
          <a href="/events/new">Create New Event</a>
          <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
        </div>
      )
    }
    return (
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
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
