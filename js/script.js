 var map;
 var markers = [];
 function initMap() {       
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},  
        zoom: 8
        });

        for(i=0;i < pharmacies.length; i++) {
          var marker = new google.maps.Marker({
            position: pharmacies[i].latLng,
            map: map
          });
          markers.push(marker);
        }
        
      }

      
      


      var pharmacy1 = {
        name : "Pharmacy 1",
        meds : "med1 med2",
        latLng: {lat: -34.397, lng: 150.644}
      }
      
      var pharmacy2 = {
        name : "Pharmacy 2",
        meds : "med2",
        latLng: {lat: -34.397, lng: 150.244}
      }

      var pharmacy3 = {
        name : "Pharmacy 3",
        meds : "med3",
        latLng: {lat: -34.100, lng: 150.644}
      }

      var pharmacies = [pharmacy1,pharmacy2,pharmacy3];

   


    for ( i = 0; i < pharmacies.length; i++) {
      
        
      
      $('#pharmacies').append("<li><a>" + pharmacies[i].name + "</a></li>")
      //$('#pharmacies').append("<li><a>Pharmacy " + i +"</a></li>");
      
    }
    
    function search() {

      var input, filter, ul, li, i;
      input = document.getElementById('myInput');
      filter = input.value.toUpperCase();
      ul = document.getElementById("pharmacies");
      li = ul.getElementsByTagName('li');
  

      for (i = 0; i < li.length; i++) {
          if (pharmacies[i].meds.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
              markers[i].setMap(map);
          } else {
              li[i].style.display = "none";
              markers[i].setMap(null);
          }
      }
  }









  
    /*function search() {
      var filter = $("#myInput").value.toUpperCase();
      var ul = $('#pharmacies')
      for (j = 0; j < pharmacies.length; i++) {
        if (pharmacies[i].meds.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
      }
    }*/
