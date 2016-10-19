class ConfirmedDetails extends React.Component {
  constructor() {
    super();
  }


  render() {
    const { title, date, host, venue, event_type } = this.props.details
    const { venueChoices } = this.props
    if (venue != undefined) {
      return(
        <div>
          <div>
            <h3>The place is set!</h3>
            <h6>Date: {date}</h6>
            <h6>Host: {host}</h6>
            <h6>Venue: {venue}</h6>
            <h6>Type: {event_type}</h6>
          </div>
          <div>
            <form  action={"/events/"+this.props.details.id+"/reset"} method="post">
              <input type="hidden" name="_method" value="put"></input>
              <input type="submit" value="Pick a Different Location"></input>
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
