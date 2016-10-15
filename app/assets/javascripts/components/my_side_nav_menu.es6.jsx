class mySidenavmenu extends React.Component {
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.marginLeft= "100px";
    document.body.style.backgroundColor = "white";
  }
  renderActiveLinks() {
    const { userId } = this.props.current_user.id
    if(this.props.current_user) {
      return(
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
          <a href="#">Profile</a>
          <a href="#">Settings</a>
          <a href="#">Find New Friend</a>
          <a href={"/users/" + {userId} + "/events/new"}>Create New Event</a>
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
