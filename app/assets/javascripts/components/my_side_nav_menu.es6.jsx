class mySidenavmenu extends React.Component {
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("container").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
  }
  render() {
    return(
      <div id="mySidenav" className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
        <a href="#">About</a>
        <a href="#">Some BS</a>
      </div>
    );
  }
}
