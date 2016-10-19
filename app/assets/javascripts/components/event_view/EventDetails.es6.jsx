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
          <hr></hr>
          <h5>{date}</h5>
          <h5>{host}</h5>
          <h5>{venue}</h5>
          <h5>{venue_address}</h5>
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
