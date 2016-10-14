class MapView extends React.Component {
  constructor(){
    super();
  }

  componentDidMount() {
    function initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }
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
