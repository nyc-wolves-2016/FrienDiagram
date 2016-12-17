class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: "",
      venueChoices: [],
      searchType: [],
    }
    this.setEventDetails = this.setEventDetails.bind(this);
    this.grabPlaces = this.grabPlaces.bind(this);
    this.removeVenueChoice = this.removeVenueChoice.bind(this);
    this.acceptVenueChoice = this.acceptVenueChoice.bind(this);
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
    const app = this
    const eventId = this.props.event.id
    const url = `/events/${String(eventId)}/confirm`
    const venueObj = {
      name: venue.name,
      address: venue.vicinity
      }
    var xhr = $.ajax({
      url,
      method: 'PUT',
      data: venueObj
    })
    xhr.fail(function(err) {
      console.log(err)
    })
    xhr.done((response) => {
      new_event = this.state.event
      new_event.venue = venue.name
      new_event.venue_address = venue.vicinity
      this.setState({
        event: new_event
      })
    })
  }
  componentWillMount() {
    const { venueChoices, event } = this.props
    const { midpoint, event_type } = this.props.event
    this.setState({venueChoices: venueChoices,
                    midpoint: midpoint,
                    searchType: event_type,
                    event: event,
                    venue: event.venue,
                    venueAddress: event.venue_address
                })
  }

  render() {
    const { searchType, midpoint, possibleVenues, detailsView, venueChoices, event, venue, venueAddress} = this.state;
    return (
        <div className="row">
            <div className="card-panel main-panel col l12">
            <h5 className="event-details-info"> {event.title} </h5>
              <div className="map-container col l8">
                <MapView
                  passUpPlaces={this.grabPlaces}
                  venues={possibleVenues}
                  midpoint={midpoint}
                  searchType={searchType}
                />
              </div>
              <div id="venue-scroll" className="row card-panel col l5 push-s1">
                <VenueList
                handleData={this.setEventDetails}
                details = {this.props.event}
                venues={ possibleVenues }
                />
              </div>
              <div className="row">
                <div className="col l12">
                  <EventDetails
                    venueChoices={ venueChoices }
                    details={ event }
                    venue={ venue }
                    venueAddress={ venueAddress}
                    removeVenueChoice={this.removeVenueChoice}
                    acceptVenueChoice={this.acceptVenueChoice}
                  />
                </div>
              </div>
            </div>
        </div>
    )
  }
}
