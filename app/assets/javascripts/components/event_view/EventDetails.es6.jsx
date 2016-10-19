class EventDetails extends React.Component {
  constructor() {
    super();

    this.handleRemoveVenueChoice = this.handleRemoveVenueChoice.bind(this);
    this.handleAccept = this.handleAccept.bind(this);
  }

  handleRemoveVenueChoice(venue) {
    this.props.removeVenueChoice(venue)
  }

  handleAccept(venue) {
    this.props.acceptVenueChoice(venue);
  }

  render() {
    const { title, date, host } = this.props.details
    const { venueChoices } = this.props
    return(
      <div>
       <div>
        <h4>{title}</h4>
        {venueChoices.map((venueChoice, i) =>
          <VenueChoice key={i}
          venueChoice={venueChoice}
          onRemove={this.handleRemoveVenueChoice} onAccept={this.handleAccept}
          />
        )}
        </div>
      </div>
    );
  }
}
