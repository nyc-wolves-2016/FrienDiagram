// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function initMap() {
        var dbc = {lat: 40.7066, lng: -74.0090};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: dbc
        });
        var marker = new google.maps.Marker({
          position: dbc,
          map: map
        });
      }
