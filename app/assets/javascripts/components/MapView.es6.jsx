class MapView extends React.Component {
  constructor(){
    super();
    this.state = {
      possibleVenues: []
    }
    // this.initMap = this.initMap.bind(this);
    // this.callPlaces = this.callPlaces.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.callback = this.callback.bind(this);
  }

    // initMap(lat,lng) {
    //   var midpoint = {lat: lat, lng: lng};
    //   var map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 16,
    //     center: midpoint
    //   });
    //   midPoint = new google.maps.Marker({
    //     position: {lat: lat, lng: lng},
    //     map: map
    //   });
    // }

    // callPlaces(lat, lng){
    //   $.ajax({
    //     url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=500&type=restaurant&key=AIzaSyC9P_uAb8slpBhg4LlB5Srk4QkI0btzxBY"
    //   }).done((response) => {
    //     // Function to pas data to App
    //     this.props.passUpPlaces(response.results)
    //   }).fail((response) => {
    //     console.log(response)
    //   })
    // }
    //
    createMarker(place) {
      var placeLoc = place.geometry.location;
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(place.name);
        infowindow.open(map, this);
      });
    }

    callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
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
