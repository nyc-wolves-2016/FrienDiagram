class mySidenav extends React.Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("container").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  render() {
    return(
      <div id="customSidenav" className="mysidenav" onClick={this.openNav.bind(this)}>
        <span>&#9776; open</span>
      </div>
    );
  }
}
