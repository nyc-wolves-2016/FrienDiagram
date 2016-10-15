class MapView extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    const { lat, lng, choices } = this.props
      // this.lat ## this.lng to set the state of the map.
      var midpoint = {lat: lat, lng: lng};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: midpoint
      });


      choices.forEach(function(venue){
        var marker = new google.maps.Marker({
          position: {lat: venue.lat, lng: venue.lng},
          map: map,

        });
      })
      midPoint = new google.maps.Marker({
        position: midpoint,
        map: map,
        icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      })
    }


  render() {

    return (
      <div>
        <div>
          <div id="map"></div>
          <script async defer src="https://maps.googleapis.com/maps/api/js?key=[KEY]&callback=initMap">
          </script>
        </div>
      </div>
    )
  }
}
