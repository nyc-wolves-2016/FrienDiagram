class MapView extends React.Component {
  constructor(){
    super();
    this.state = {
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

  componentDidMount() {
    const { lat, lng, choices } = this.state
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
