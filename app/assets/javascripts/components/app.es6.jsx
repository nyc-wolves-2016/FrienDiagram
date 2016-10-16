class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: [40.705116, -74.00883],
      selectedVenue: {},
      // Will remove and use MidPoint as these variables
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

  findVenueChoices(possibleVenues, lat, lng) {
    if (possibleVenues.length < 1) {
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=500&type=restaurant&key=AIzaSyC9P_uAb8slpBhg4LlB5Srk4QkI0btzxBY"
      })
      .done((response) => {
        this.setState({possibleVenues: response});
      })
    }
  }

  setEventDetails(index) {
    // setState to the data collected
    // to venueData
    var places = this.state.possibleVenues;
    this.setState((prevState) => {
      return {
        selectedVenue: [...prevState.selectedVenue, places[index]]
      }
    })
  }
  componentDidMount() {
    var lat = this.state.midpoint[0].toString();
    var lng = this.state.midpoint[1].toString();
    var location= "location="+lat+","+lng;
    var rankby = "&rankby=distance";
    //TODO added food - should recieve this from event object
    var types = "&types=food";
    var key = "&key=[KEY]";
    var radius = "&500";
    this.setState({possibleVenues: this.props.possibleVenues})
    this.findVenueChoices(this.state.possibleVenues, this.state.lat, this.state.lng)
    //TODO This is where we want to ping Google
    // var xhr = $.ajax({
    //   url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?"+location+rankby+types+radius+key,
    //   type: "GET",
    //   cache: false
    // })
    // // xhr.success(function(response) {
    // debugger
    //   this.setState({possibleVenues: response})
    // })
  }

  render() {
    debugger;
    const { choices, lat, lng, midpoint, possibleVenues, detailsView } = this.state
    // Uncomment line below to see state change
    // console.log('This is my state', this.state)
    return (
        <div className="app-container row">
            <div className="col-md-12">
              <MapView choices={choices} lat={lat} lng={lng} />
            </div>

            <div className="venue-list-container">
              <VenueList handleData={this.setEventDetails} venues={ possibleVenues } />
            </div>
        </div>

      /* <div className="venue-details-container">
        <EventDetails details={this.state.selectedVenue} />
      </div> */
    )
  }
}
