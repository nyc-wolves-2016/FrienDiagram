class MapView extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: []
    }
  }
  

  componentDidMount() {
    const { searchType, lat, lng, midpoint, choices } = this.props
    //
    // this.callPlaces(lat, lng);
    // this.initMap(lat,lng);
    this.map = new window.google.maps.Map(this.refs.map, {
      center: midpoint,
      zoom: 15
    });
    var midpointLocal = new google.maps.Marker({
      position: midpoint,
      map: this.map
    });
    var request = {
      location: midpoint,
      radius: '500',
      types: searchType
    };
    var service = new google.maps.places.PlacesService(this.map);
    var results = service.nearbySearch(request, (results) => {
        this.setState({possibleVenues: results})
        this.props.passUpPlaces(this.state.possibleVenues)
        for (var i = 0; i < results.length; i++) {
          var placeLoc = results[i].geometry.location;
          var marker = new google.maps.Marker({
            map: this.map,
            position: results[i].geometry.location
          });
        }
    });
  }

  render() {
    return (
        <div ref="map" id="map" className="mapview-container col-md-12"></div>
    )
  }
}
