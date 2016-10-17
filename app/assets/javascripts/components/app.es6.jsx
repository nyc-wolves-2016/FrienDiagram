class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: {lat: 40.705116, lng: -74.00883},
      selectedVenue: {},
      searchType: ['restaurant'],
      // Will remove and use MidPoint as these variables
      lat: 40.705116,
      lng: -74.00883,
      venues: []
    }
    this.setEventDetails = this.setEventDetails.bind(this);
    this.grabPlaces = this.grabPlaces.bind(this);
  }


  setEventDetails(venue) {
    // setState to the data collected
    this.setState((prevState) => {
      return {
       selectedVenue: venue
      };
    })
  }

  grabPlaces(venuesArray) {
    debugger;
    // Take places ping from MapView
    // Send info to ListView
    this.setState({ possibleVenues: venuesArray })
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  render() {
    const { searchType, lat, lng, midpoint, possibleVenues, detailsView } = this.state
    // Uncomment line below to see state change
    // console.log('This is my state', this.state)
    console.log(possibleVenues)
    return (
        <div className="app-container row">

              <MapView
              passUpPlaces={this.grabPlaces}
              venues={possibleVenues}
              lat={lat}
              lng={lng}
              midpoint={midpoint}
              searchType={searchType}
              />
              <VenueList handleData={this.setEventDetails} venues={ possibleVenues } />
              <EventDetails venue={this.state.selectedVenue} details={this.props.event}/>
          </div>
    )
  }
}
