var locations = [
    [
        "Off Leash Dog Park",
        48.4474221,
        -123.29544067
    ],
    [
    		"Gordon Head Trail",
            48.4572279, -123.3054427
    ],
    
    [
    	"Mount Doug Park",
        48.4923901, -123.3455466
    ],
    [
    	"Playfair Park",
        48.4616898, -123.3582328
    ],
]

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: new google.maps.LatLng(48.463649,  -123.311951),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

var cnt = 0;

function counting() {
cnt++;
alert(cnt);

}

google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]+"   "+locations [i][1]+"   "+ locations [i][2]+"   ");
          infowindow.open(map, marker);
        }
      })(marker, i));
    }