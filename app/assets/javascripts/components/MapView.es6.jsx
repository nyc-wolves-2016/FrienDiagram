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
    }

    callPlaces(lat, lng){
      $.ajax({
        url: "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + lng + "&radius=500&type=restaurant&key=AIzaSyC9P_uAb8slpBhg4LlB5Srk4QkI0btzxBY"
      }).done((response) => {
        // Function to pas data to App
        this.props.passUpPlaces(response.results)
      }).fail((response) => {
        console.log(response)
      })
    }

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
          this.createMarker(results[i]);
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
    this.callPlaces(lat, lng);
    this.initMap(lat,lng);
    // concatLink = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCBINYOJFWMyIvjB33nka8JbXQ7ObqXaJA&libraries=places&callback=initMap"
    // this.setState({link: concatLink })

      // choices.forEach(function(venue){
      //   var marker = new google.maps.Marker({
      //     position: {lat: venue.lat, lng: venue.lng},
      //     map: map,
      //   });
      // })


    }

  render() {
    const { link } = this.props
    return (
        <div ref="map" id="map" className="mapview-container"><script src={link} async defer></script></div>
    )
  }
}
