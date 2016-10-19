class VenueChoice extends React.Component {
  constructor() {
    super();

    this.passUpRemoveVenueChoice = this.passUpRemoveVenueChoice.bind(this);
    this.acceptVenueChoice = this.acceptVenueChoice.bind(this);
  }

  passUpRemoveVenueChoice(venue) {
    this.props.onRemove(venue);
  }

  acceptVenueChoice(venue) {
    this.props.onAccept(venue);
  }

  render() {
    const { name, price_level, rating, icon } = this.props.venueChoice
    const { venueChoice } = this.props
    return (
        <div className="col l4">
          <div className="card-panel venue-choice">
            <div className="choice left">
              <VenueAccept acceptVenueChoice={this.acceptVenueChoice} venue={ venueChoice }  />
            </div>
            <div className="choice right">
              <VenueRemove venue={venueChoice} handleRemoveVenueChoice={this.passUpRemoveVenueChoice} />
            </div>
            <div className="venue-choice-info">
              <span><h5>{name}</h5></span><hr></hr>
              <div className="row">
                <span className="col s6"> Rating: {rating} </span>
                <span className="col s6"> Price: {price_level} </span>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
