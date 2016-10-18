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
        <button type="submit" className="btn-floating waves-effect waves-light btn">
          <i className="fa fa-times" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}
