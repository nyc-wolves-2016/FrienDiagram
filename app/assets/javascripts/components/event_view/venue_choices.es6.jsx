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
      <div>
        <div className="panel left">
          <VenueAccept acceptVenueChoice={this.acceptVenueChoice} venue={ venueChoice }  />
        </div>
        <div className="panel right">
          <VenueRemove venue={venueChoice} handleRemoveVenueChoice={this.passUpRemoveVenueChoice} />
        </div>
        <div className="card-panel red">
          <span><h5><strong>{name}</strong></h5></span><hr></hr>
          <span> {rating} </span>
          <span> {price_level} </span>
        </div>
      </div>
    )
  }
}
