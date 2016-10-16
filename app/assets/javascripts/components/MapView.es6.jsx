class MapView extends React.Component {
  constructor(){
    super();
    this.initMap = this.initMap.bind(this);
    this.callPlaces = this.callPlaces.bind(this);
    this.createMarker = this.createMarker.bind(this);
    this.callback = this.callback.bind(this);
  }

  initMap(lat,lng) {
    var midpoint = {lat: lat, lng: lng};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: midpoint
    });
    midPoint = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: map
    });
    var request = {
      location: midpoint,
      radius: '500',
      types: ['restaurant']
    };
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }

  // callPlaces() {
  //   debugger;
  //   infoWindow = new google.maps.InfoWindow();
  //   service = new google.maps.places.PlacesService(map);
  //   service.nearbySearch({
  //     location: midpoint,
  //     radius: 500,
  //     type: ['restaurant']
  //   }, this.callback());
  // }

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
    const { lat, lng, choices } = this.props
    //   // this.lat ## this.lng to set the state of the map.
    //   if (!this.map) {
    //     this.map = new google.maps.Map(this.refs.map, {
    //       center: {lat: 40.745, lng: -73.897},
    //       zoom: 14,
    //       streetViewControl: false
    //     })
    //   }
    this.initMap(lat, lng)
      // choices.forEach(function(venue){
      //   var marker = new google.maps.Marker({
      //     position: {lat: venue.lat, lng: venue.lng},
      //     map: map,
      //   });
      // })


    }

  render() {
    return (
        <div ref="map" id="map" className="mapview-container"><script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBINYOJFWMyIvjB33nka8JbXQ7ObqXaJA&libraries=places&callback=initMap" async defer></script></div>
    )
  }
}
