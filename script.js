function initMap() {
    const location = {lat: 36.195250, lng: -115.118500};
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 18,
        center: location,
<<<<<<< HEAD
=======
    });

    new google.maps.Marker({
        position: location,
        map,
        title: "Nevada Nails & Lashes",
>>>>>>> ba576956bd04c446aab3b88769dab97ec0491b44
    });

    new google.maps.Marker({
        position: location,
        map,
        title: "Nevada Nails & Lashes",
    });
}