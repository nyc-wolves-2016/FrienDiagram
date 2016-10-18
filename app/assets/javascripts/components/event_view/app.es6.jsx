class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: {lat: 0, lng: 0},
      venueChoices: [],
      searchType: [],
      // Will remove and use MidPoint as these variables
      // lat: 0,
      // lng: 0,
      venues: []
    }
    this.setEventDetails = this.setEventDetails.bind(this);
    this.grabPlaces = this.grabPlaces.bind(this);
    this.removeVenueChoice = this.removeVenueChoice.bind(this);
  }

  componentWillMount() {
    const { event } = this.props
    this.setState({ midpoint: { lat: event.midpoint[0], lng: event.midpoint[1] },
                    searchType: [event.event_type]
    })
  }

  setEventDetails(venue) {
    // setState to the data collected

    if (this.state.venueChoices.length < 3) {
      this.setState((prevState) => {
        return {
          venueChoices: prevState.venueChoices.concat([venue])
        }
      });
    }
  }

  grabPlaces(venuesArray) {
    // Take places ping from MapView
    // Send info to ListView
    this.setState({ possibleVenues: venuesArray })
  }

  removeVenueChoice(venue) {
      var i = this.state.venueChoices.indexOf(venue)

      if (i != -1) {
        this.state.venueChoices.splice(i, 1)
        this.setState({ venueChoices: this.state.venueChoices })
      }

  }

  render() {
    const { searchType, lat, lng, midpoint, possibleVenues, detailsView, venueChoices} = this.state;
    const { event } = this.props;
    return (
        <div>
          <div className="row card-panel teal l12">
            <MapView
              passUpPlaces={this.grabPlaces}
              venues={possibleVenues}
              lat={lat}
              lng={lng}
              midpoint={midpoint}
              searchType={searchType}
              />
            <EventDetails venueChoices={ venueChoices } details={ event } removeVenueChoice={this.removeVenueChoice}/>
          </div>
            <VenueList handleData={this.setEventDetails} details = {this.props.event} venues={ possibleVenues } />
          </div>
    )
  }
}
