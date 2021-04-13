function initMap() {
    let location = {lat: 36.195720, lng: -115.118680};
    let map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: location
    });
}
