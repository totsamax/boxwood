function initMap() {
    var e = {
            lat: 42.896112,
            lng: 74.643991
        },
        a = new google.maps.Map(document.getElementById("map"), {
            zoom: 18,
            center: e,
            mapTypeId: google.maps.MapTypeId.HYBRID
        });
    new google.maps.Marker({
        position: e,
        map: a,
        title: "Питомник декоративных растений"
    })
}