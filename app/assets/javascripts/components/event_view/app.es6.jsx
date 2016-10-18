class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: {lat: 40.705116, lng: -74.00883},
      venueChoices: [],
      searchType: ['restaurant'],
      // Will remove and use MidPoint as these variables
      lat: 40.705116,
      lng: -74.00883,
      venues: []
    }
    this.setEventDetails = this.setEventDetails.bind(this);
    this.grabPlaces = this.grabPlaces.bind(this);
  }

  componentDidMount() {

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
            <EventDetails venueChoices={ venueChoices } details={ event }/>
          </div>
            <VenueList handleData={this.setEventDetails} details = {this.props.event} venues={ possibleVenues } />
          </div>
    )
  }
}
