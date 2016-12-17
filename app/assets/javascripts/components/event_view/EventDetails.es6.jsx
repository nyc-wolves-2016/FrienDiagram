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
    const { title, day, host_username, venue, venue_address, id } = this.props.details
    const { venueChoices } = this.props
    // const { venue } = this.props
    if (venue && venue != "") {
      return(
        <div>
          <h5>Great! This event is set for {title}</h5>
          <hr></hr>
          <h6>Date: {day}</h6>
          <h6>Host: {host_username}</h6>
          <h6>Venue: {venue}</h6>
          <h6>Address: {venue_address}</h6>
          <div>
            <form action={"/events/"+id+"/reset"} method="post">
              <input type="hidden" name="_method" value="PUT" />
              <input type="submit" value="Choose a Different Venue" className="waves-effect waves-light btn normal-btn"></input>
            </form>
          </div>
        </div>
      )
    } else {
      return(
        <div>
         <div>
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
