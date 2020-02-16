$(document).ready(function(){
  $('.carousel-item').slick({
    speed: 1000,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/prev.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/next.png"></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                dots: true,
                arrows: false
            }
        },
    ]
  });

  $(window).scroll(function() {
    if($(this).scrollTop() > 1600) {
        $('.skrollup').fadeIn();
    } else {
        $('.skrollup').fadeOut();
    }
  });

  $("a[href^='#']").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
  });

  function initMap() {
    var coordinates = {lat: 55.74807246770866, lng: 37.62713849544526};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coordinates,
        // styles: [
        //   {
        //     "elementType": "geometry",
        //     "stylers": [
        //       {
        //         "color": "#1d2c4d"
        //       }
        //     ]
        //   },
        //   {
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#8ec3b9"
        //       }
        //     ]
        //   },
        //   {
        //     "elementType": "labels.text.stroke",
        //     "stylers": [
        //       {
        //         "color": "#1a3646"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "administrative.country",
        //     "elementType": "geometry.stroke",
        //     "stylers": [
        //       {
        //         "color": "#4b6878"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "administrative.land_parcel",
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#64779e"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "administrative.province",
        //     "elementType": "geometry.stroke",
        //     "stylers": [
        //       {
        //         "color": "#4b6878"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "landscape.man_made",
        //     "elementType": "geometry.stroke",
        //     "stylers": [
        //       {
        //         "color": "#334e87"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "landscape.natural",
        //     "elementType": "geometry",
        //     "stylers": [
        //       {
        //         "color": "#023e58"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "poi",
        //     "elementType": "geometry",
        //     "stylers": [
        //       {
        //         "color": "#283d6a"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "poi",
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#6f9ba5"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "poi",
        //     "elementType": "labels.text.stroke",
        //     "stylers": [
        //       {
        //         "color": "#1d2c4d"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "poi.park",
        //     "elementType": "geometry.fill",
        //     "stylers": [
        //       {
        //         "color": "#023e58"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "poi.park",
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#3C7680"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road",
        //     "elementType": "geometry",
        //     "stylers": [
        //       {
        //         "color": "#304a7d"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road",
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#98a5be"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road",
        //     "elementType": "labels.text.stroke",
        //     "stylers": [
        //       {
        //         "color": "#1d2c4d"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road.highway",
        //     "elementType": "geometry",
        //     "stylers": [
        //       {
        //         "color": "#2c6675"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road.highway",
        //     "elementType": "geometry.stroke",
        //     "stylers": [
        //       {
        //         "color": "#255763"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road.highway",
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#b0d5ce"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "road.highway",
        //     "elementType": "labels.text.stroke",
        //     "stylers": [
        //       {
        //         "color": "#023e58"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "transit",
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#98a5be"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "transit",
        //     "elementType": "labels.text.stroke",
        //     "stylers": [
        //       {
        //         "color": "#1d2c4d"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "transit.line",
        //     "elementType": "geometry.fill",
        //     "stylers": [
        //       {
        //         "color": "#283d6a"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "transit.station",
        //     "elementType": "geometry",
        //     "stylers": [
        //       {
        //         "color": "#3a4762"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "water",
        //     "elementType": "geometry",
        //     "stylers": [
        //       {
        //         "color": "#0e1626"
        //       }
        //     ]
        //   },
        //   {
        //     "featureType": "water",
        //     "elementType": "labels.text.fill",
        //     "stylers": [
        //       {
        //         "color": "#4e6d70"
        //       }
        //     ]
        //   }
        // ]
    });

    var contentString = '<div id="map-content">'+
      '<h4 id="map-heading">г. Москва</h4>'+
      '<p>ул. Садовническая, дом 5, офис 4-6</p>' +
      '<p>700 от м. Новокузнецкая</p>' +
      '<p>Тел: +7 (926) 423 01 00</p>' +
      '<a href="mailto:info@glopt.ru">info@glopt.ru</a>'
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400
  });

  var mapMarker = new google.maps.Marker({
    position: coordinates,
    map: map,
    title:  'Наш адрес',
    icon: {
        url: "../icons/marker.png"
        // scaledSize: new google.maps.Size(40, 20)
    }        
    });
                    
    mapMarker.addListener('click', function() {
            infowindow.open(map, mapMarker);
      });

      
}

  initMap();

  window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    hamburger = document.querySelector('.gamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('gamburger-active');
        menu.classList.toggle('menu-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('gamburger-active');
            menu.classList.toggle('menu-active');
        })
    })
  })

});