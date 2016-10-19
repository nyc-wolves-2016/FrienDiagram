class VenueAccept extends React.Component {
  constructor() {
    super();
    this.clickAcceptVenueChoice = this.clickAcceptVenueChoice.bind(this);
  }

  clickAcceptVenueChoice(event) {
    event.preventDefault();
    var venue = this.props.venue
    this.props.acceptVenueChoice(venue)
  }

  render() {
    return (
      <form onSubmit={this.clickAcceptVenueChoice}>
        <button type="submit" className="waves-effect waves-light btn choice-btn">
          <i className="icono-check"></i>
        </button>
      </form>
    )
  }
}
