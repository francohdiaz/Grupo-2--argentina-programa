function iniciarMap(){
    var coord = {lat:-34.6003715 ,lng: -58.4533693};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}