class MapView extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: []
    }
    this.addMarkerListener = this.addMarkerListener.bind(this)
  }

  componentDidMount() {
    const { searchType, midpoint, choices } = this.props
    var focus = { lat: midpoint[0], lng: midpoint[1] }
    this.map = new window.google.maps.Map(this.refs.map, {
      center: focus,
      zoom: 16
    });
    var midpointLocal = new google.maps.Marker({
      position: focus,
      map: this.map,
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 6
      }
    });
    var request = {
      location: focus,
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
          position: results[i].geometry.location,
          icon: {
            url:'../place_project.png',
            scaledSize: new google.maps.Size(30, 30)
          }
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
        <div ref="map" id="map" className="col s3 m3 card valign-wrapper"></div>
    )
  }
}
