class VenueChoice extends React.Component {
  constructor() {
    super();

    this.passUpRemoveVenueChoice = this.passUpRemoveVenueChoice.bind(this);
  }

  passUpRemoveVenueChoice(venue) {
    // Pass up remove event
    this.props.onRemove(venue);
  }

  render() {
    const { name, price_level, rating, icon } = this.props.venueChoice
    const { venueChoice } = this.props
    return (
      <div>
        <div className="panel left">
          <VenueAccept venue={ venueChoice }  />
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
