class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: "",
      venueChoices: [],
      searchType: [],
      venue: []
    }
    this.setEventDetails = this.setEventDetails.bind(this);
    this.grabPlaces = this.grabPlaces.bind(this);
    this.removeVenueChoice = this.removeVenueChoice.bind(this);
    this.acceptVenueChoice = this.acceptVenueChoice.bind(this);
  }

  componentWillMount(){
    const { midpoint, searchType } = this.props.event
    this.setState({
      midpoint: midpoint,
      searchType: searchType
    })
  }

  setEventDetails(venue) {
    // setState to the data collected
    const eventId = this.props.event.id
    const url = `/events/${String(eventId)}/venue_choices`
    const venueChoiceObj = {
      event_id: eventId, venue:{
        event_id: eventId,
        place_id: venue.place_id,
        name: venue.name,
        vicinity: venue.vicinity,
        price_level: venue.price_level,
        rating: venue.rating
        }
      }
    if (this.state.venueChoices.length < 3) {
      $.ajax({
        url,
        method: "POST",
        data: venueChoiceObj
      }).done((response) => {
        this.setState((prevState) => {
          return {
            venueChoices: prevState.venueChoices.concat([response])
          }
      })
      });
    }
  }

  grabPlaces(venuesArray) {
    // Take places ping from MapView
    // Send info to ListView
    this.setState({ possibleVenues: venuesArray })
  }

  removeVenueChoice(venue) {
    const eventId = this.props.event.id
    const url = `/events/${String(eventId)}/venue_choices/${String(venue.id)}`
    const venueObj = venue
    var i = this.state.venueChoices.indexOf(venue)

    if (i != -1) {
      this.state.venueChoices.splice(i, 1)
      this.setState({ venueChoices: this.state.venueChoices })
    }
    $.ajax({
      url,
      method: 'DELETE',
      data: venueObj
    }).done((response) => {
    })
  }

  acceptVenueChoice(venue) {
    this.setState({ venue: [venue] })
    // Change status of event to confirmed
    // add venue information
    // venue address
    const eventId = this.props.event.id
    const url = `/events/${String(eventId)}/confirm`
    const venueObj = {
      name: venue.name,
      address: venue.vicinity
    }
    $.ajax({
      url,
      method: 'PUT',
      data: venueObj
    }).done(function(response) {
    })
    .fail(function(err) {
      console.log(err)
    })
  }
  componentDidMount() {
    this.setState({venueChoices: this.props.venueChoices})
  }

  render() {
    debugger
    const { searchType, midpoint, possibleVenues, detailsView, venueChoices} = this.state;
    const { event } = this.props;
    return (
        <div>
          <div className="row card-panel teal l12">
            <MapView
              passUpPlaces={this.grabPlaces}
              venues={possibleVenues}
              midpoint={midpoint}
              searchType={searchType}
            />
            <EventDetails
            venueChoices={ venueChoices }
            details={ event }
            removeVenueChoice={this.removeVenueChoice}
            acceptVenueChoice={this.acceptVenueChoice}
            />

          </div>
            <VenueList
            handleData={this.setEventDetails}
            details = {this.props.event}
            venues={ possibleVenues }
            />
          </div>
    )
  }
}
