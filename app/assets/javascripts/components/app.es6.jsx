class App extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: [],
      midpoint: [],
      detailsView: {},
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
  }

  componentDidMount(){
    $.ajax({
      url: "/users/1/events/1"
    })
    .done((response) => {
      this.setState({possibleVenues: response})
    })
  }

  render() {
    const { choices, lat, lng, midpoint, possibleVenues, detailsView } = this.state
    return (
      <div className="app-container">
        <MapView choices={choices} lat={lat} lng={lng} />
        <div className="venue-list-container">
          <VenueList venues={ possibleVenues } />
        </div>
        <div className="venue-details-container">
          <VenueDetails details={detailsView}/>
        </div>
      </div>
    )
  }
}
