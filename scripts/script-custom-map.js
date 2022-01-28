function initialize()
{
	var pos = new google.maps.LatLng(54.4679151, 18.4896555)
	var mpos = new google.maps.LatLng(54.4677151, 18.4896555)
	var mapOptions = {
		center: pos,
		zoom: 18,
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: true,
		disableDoubleClickZoom: true,
		disableDefaultUI: true,
		styles:
			[
			  {
			  	"elementType": "geometry",
			  	"stylers": [
				  { "weight": 5.4 },
				  { "hue": "#0022ff" },
				  { "gamma": 2.5 },
				  { "saturation": -40 }
			  	]
			  }, {
			  	"featureType": "road",
			  	"elementType": "geometry.stroke",
			  	"stylers": [
				  { "color": "#ac0061" },
				  { "weight": 2.7 }
			  	]
			  }
			],
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var desc =
		'<div class="content text-center" style="margin: 16px 0 0 16px">' +
			'<p><img src="images/logo.svg" class="logo-small info-window"/></p>' +
			'Ul. Gryfa Pomorskiego 65/1<br />81-572 Gdynia' +
		'</div>';

	var infowindow = new google.maps.InfoWindow({
		content: desc
	});

	var icon = 'images/map.png';
	var marker = new google.maps.Marker({
		position: mpos,
		map: map,
		title: 'Olmadent',
		icon: icon
	});

	google.maps.event.addListener(marker, 'click', function ()
	{
		infowindow.open(map, marker);
	});

	infowindow.open(map, marker);

}
google.maps.event.addDomListener(window, 'load', initialize);