class VenueRemove extends React.Component {
  constructor() {
    super();
    this.clickRemoveVenueChoice = this.clickRemoveVenueChoice.bind(this);
  }

  clickRemoveVenueChoice(event) {
    event.preventDefault();
    var venue = this.props.venue
    this.props.handleRemoveVenueChoice(venue)
  }

  render() {
    return (
      <form onSubmit={this.clickRemoveVenueChoice}>
        <button type="submit" className="waves-effect waves-light btn choice-btn">
          <i className="icono-cross" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}
