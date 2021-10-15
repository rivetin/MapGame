
function initialize() {
    var location = new google.maps.LatLng(10.525187980987075, 76.2137848891439);
    var mapData = {
        zoom: 100,
        center: location,
        mapTypeId: google.maps.MapTypeId.SATELLITE,
        disableDefaultUI: true

    };
    var injectMap = new google.maps.Map(document.getElementById("map"), mapData);


    var AddData = new google.maps.Marker(
        {
            position: location,
            map: injectMap,
            title: "Kerala"
        });
}

google.maps.event.addDomListener(window, 'load', initialize);
