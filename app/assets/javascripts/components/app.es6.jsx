class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [
        {
          name: "freedomTower",
          rating: 1,
          price: "$$$",
          lat: 40.713230,
          lng: -74.013367
        },
        {
          name: "freedomTower",
          lat: 40.759011,
          lng: -73.9884472
        }
      ],
      venues: [],
      link: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBINYOJFWMyIvjB33nka8JbXQ7ObqXaJA&libraries"
>>>>>>> Pass up GPlaces ping from MapView to App.
    }
    this.setEventDetails = this.setEventDetails.bind(this);
    this.grabPlaces = this.grabPlaces.bind(this);
  }


  setEventDetails(index) {
    // setState to the data collected
    // to venueData
    var venues = this.state.possibleVenues;
    this.setState((prevState) => {
      return {
       selectedVenue: venues[index]
      };
    })
  }

  grabPlaces(venuesArray) {
    // Take places ping from MapView
    // Send info to ListView

    this.setState((prevState) => {
      return {
        possibleVenues: [...prevState.possibleVenues, venuesArray]
      }
    })
    debugger;
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
    // this.setState({possibleVenues: this.props.possibleVenues})
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

  componentWillMount() {
    this.setState({
      midpoint: [],
      selectedVenue: {},
      status: "" ,
      markers: [],
      // Will remove and use MidPoint as these variables
      lat: "",
      lng: "",
      choices: [ ]
    })
  }

  render() {
    const { choices, lat, lng, midpoint, possibleVenues, detailsView } = this.state
    // Uncomment line below to see state change
    console.log('This is my state', this.state)
    return (
        <div className="app-container row">
            <div className="col-md-12">
              <MapView
              passUpPlaces={this.grabPlaces}
              choices={choices}
              lat={lat}
              lng={lng}
              mapLink={this.state.link} />
            </div>

            <div className="venue-list-container">
              <VenueList handleData={this.setEventDetails} venues={ this.state.possibleVenues } />
            </div>
            <div>
              <EventDetails venue={this.state.selectedVenue} details={this.props.event}/>
            </div>
        </div>

      /* <div className="venue-details-container">
        <EventDetails details={this.state.selectedVenue} />
      </div> */
    )
  }
}
