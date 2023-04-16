function iniciarMap(){
  var coord = {lat:-34.6003717 ,lng: -58.4509993};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 18,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}