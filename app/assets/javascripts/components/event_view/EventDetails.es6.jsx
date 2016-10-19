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
    const { title, date, host, venue, venue_address, id } = this.props.details
    const { venueChoices } = this.props
    if (this.props.venue && this.props.venue != "") {
      return(
        <div>
          <h2>Great! This event is set!</h2>
          <h3>{title}</h3>
          <h6>{date}</h6>
          <h6>{host}</h6>
          <h6>{venue}</h6>
          <h6>{venue_address}</h6>
          <div>
            <form action={"/events/"+id+"/reset"} method="post">
              <input type="hidden" name="_method" value="PUT" />
              <input type="submit" value="Choose a Different Venue"></input>
            </form>
          </div>
        </div>
      )
    } else {
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
}
