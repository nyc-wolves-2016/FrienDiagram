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
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Find New Friend</a>
          <a href={"/users/" + {id} + "/events/new"}>Create New Event</a>
          <a rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
        </div>
      )
    }
    return (
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
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
