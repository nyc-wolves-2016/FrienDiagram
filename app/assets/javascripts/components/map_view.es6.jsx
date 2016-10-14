class MapView extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
      // this.lat ## this.lng to set the state of the map.
      var midpoint = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: midpoint
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }


  render() {

    return (
      <div>
        <div>
          <div id="map"></div>
          <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDY94qvuFjhS-GJs7z8SwHjKALwkj4p_Og&callback=initMap">
          </script>
        </div>
      </div>
    )
  }
}
