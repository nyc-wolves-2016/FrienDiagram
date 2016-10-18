class VenueAccept extends React.Component {
  constructor() {
    super();
    this.clickAcceptVenueChoice = this.clickAcceptVenueChoice.bind(this);
  }

  clickAcceptVenueChoice(event) {
    event.preventDefault();
    var venue = this.props.venue
    this.props.handleAcceptVenueChoice(venue)
  }

  render() {
    return (
      <form onSubmit={this.clickAcceptVenueChoice}>
        <button type="submit" className="btn-floating waves-effect waves-light btn">
          <i className="small material-icons">done</i>
        </button>
      </form>
    )
  }
}
