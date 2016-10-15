class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: [],
      selectedVenue: {},
      lat: 40.705116,
      lng: -74.00883,
      choices: [
        {
          name: "freedomTower",
          lat: 40.713230,
          lng: -74.013367
        },
        {
          name: "freedomTower",
          lat: 40.759011,
          lng: -73.9884472
        }
      ]
    }
    this.setEventDetails = this.setEventDetails.bind(this);
  }

  componentDidMount(){
    $.ajax({
      url: "/users/1/events/1"
    })
    .done((response) => {
      this.setState({possibleVenues: response})
    })
  }

  setEventDetails(index) {
    // setState to the data collected
    // to venueData
    var places = this.state.possibleVenues;
    debugger;
    this.setState((prevState) => {
      return {
        selectedVenue: [...prevState.selectedVenue, places[index]]
      }
    })
  }

  render() {
    const { choices, lat, lng, midpoint, possibleVenues, detailsView } = this.state
    // Uncomment line below to see state change
    // console.log('This is my state', this.state)
    return (
      <div className="app-container">
        <MapView choices={choices} lat={lat} lng={lng} />
        <div className="venue-list-container">
          <VenueList handleData={this.setEventDetails} venues={ possibleVenues } />
        </div>
        <div className="venue-details-container">
          <EventDetails details={this.state.selectedVenue} />
        </div>
      </div>
    )
  }
}
