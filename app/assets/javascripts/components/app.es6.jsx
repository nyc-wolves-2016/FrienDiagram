class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: {40.705116, -74.0088},
      selectedVenue: {},
      // Will remove and use MidPoint as these variables
      lat: 40.705116,
      lng: -74.00883,
      venues: [],
      link: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBINYOJFWMyIvjB33nka8JbXQ7ObqXaJA&libraries"
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
    // Take places ping from MapView
    // Send info to ListView
    this.setState({ possibleVenues: venuesArray })
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  render() {
    const { lat, lng, midpoint, possibleVenues, detailsView } = this.state
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
              mapLink={this.state.link} />
              <VenueList handleData={this.setEventDetails} venues={ possibleVenues } />
              <EventDetails venue={this.state.selectedVenue} details={this.props.event}/>
          </div>
    )
  }
}
