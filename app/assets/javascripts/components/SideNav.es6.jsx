class SideNav extends React.Component {
  handleToggle() {
    // Initialize collapse button
    $(".button-collapse").sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
    }.bind(this));
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    //$('.collapsible').collapsible();
  }

  render() {
    return(
      <a href="#" onClick={this.handleToggle} data-activates="slide-out" className="button-collapse">
        <i className="material-icons">menu</i>
      </a>
    );
  }
}
