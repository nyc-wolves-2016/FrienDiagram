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
    const { name, price_level, rating, icon, vicinity } = this.props.venueChoice
    const { venueChoice } = this.props
    return (
        <div className="col l4">
          <div className="card-panel checked possible-venue">
            <div className="choice left">
              <VenueAccept acceptVenueChoice={this.acceptVenueChoice} venue={ venueChoice }  />
            </div>
            <div className="choice right">
              <VenueRemove venue={venueChoice} handleRemoveVenueChoice={this.passUpRemoveVenueChoice} />
            </div>
            <div className="venue-choice-info">
              <span><h5>{name}</h5></span><hr></hr>
              <div className="row ratings">
                <div className="s6 details">
                  <span> Rating: {rating} </span>
                </div>
                <div className="s6 details">
                  <span> Price: {price_level} </span>
                </div>
                <div className="s6 details">
                  <span>{vicinity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
