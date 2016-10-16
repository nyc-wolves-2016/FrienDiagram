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
      venues: [],
      link: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBINYOJFWMyIvjB33nka8JbXQ7ObqXaJA&libraries"
    }
    this.setEventDetails = this.setEventDetails.bind(this);
    this.grabPlaces = this.grabPlaces.bind(this);
  }


  setEventDetails(index) {
    // setState to the data collected
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
    this.setState({ possibleVenues: venuesArray })
  }

  componentDidMount() {
<<<<<<< HEAD
    // TODO Possible Feature
=======
<<<<<<< HEAD
    var lat = this.state.midpoint[0].toString();
    var lng = this.state.midpoint[1].toString();
    var location= "location="+lat+","+lng;
    var rankby = "&rankby=distance";
    //TODO added food - should recieve this from event object
    var types = "&types=food";
    var key = "&key=[KEY]";
    var radius = "&500";
    //TODO This is where we want to ping Google
  }

  componentWillMount() {
    // TODO ** FIGURE OUT WHAT THIS DOES **
    // this.setState({
    //   midpoint: [],
    //   selectedVenue: {},
    //   status: "" ,
    //   markers: [],
    //   // Will remove and use MidPoint as these variables
    //   lat: "",
    //   lng: "",
    //   choices: [ ]
    // })
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
