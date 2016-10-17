class MapView extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: []
    }
    this.addMarkerListener = this.addMarkerListener.bind(this)
  }

  componentDidMount() {
    const { searchType, lat, lng, midpoint, choices } = this.props
    //
    // this.callPlaces(lat, lng);
    // this.initMap(lat,lng);
    this.map = new window.google.maps.Map(this.refs.map, {
      center: midpoint,
      zoom: 16
    });
    var midpointLocal = new google.maps.Marker({
      position: midpoint,
      map: this.map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });
    var request = {
      location: midpoint,
      radius: '500',
      types: searchType
    };
    this.service = new google.maps.places.PlacesService(this.map);
    var results = this.service.nearbySearch(request, (results) => {
      this.setState({possibleVenues: results})
      this.props.passUpPlaces(this.state.possibleVenues)
      for (var i = 0; i < results.length; i++) {
        var placeLoc = results[i].geometry.location;
        var marker = new google.maps.Marker({
          map: this.map,
          position: results[i].geometry.location
        });
        this.addMarkerListener(marker, results[i])
      }
    });
  }

  addMarkerListener(marker, data) {
    google.maps.event.addListener(marker, 'click', function() {
        this.service.getDetails(data, (results, status) => {
        if (status !== google.maps.places.PlacesServiceStatus.OK) {
          console.error(status);
          return;
        }
        var infoWindow = new google.maps.InfoWindow();
        infoWindow.setContent(data.name);
        infoWindow.open(this.map, marker);
      });
    }.bind(this));
  }

  render() {
    return (
        <div ref="map" id="map" className="mapview-container col-md-12"></div>
    )
  }
}
