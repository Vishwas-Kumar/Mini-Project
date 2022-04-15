// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=b7ae920530951c1c4f8e62d79f6b5c9a


// const url = `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=b7ae920530951c1c4f8e62d79f6b5c9a`


// fetch(url)
// .then(function (res) {
//     return res.json()
// })
// .then(function (res){
//     console.log(res)
//     // pura data aayega 
//     // console.log(res.main.temp)    
//     // jo cahiye wohi aayega (.main.temp ---> folder.data )
// })


  function getData(){
      let city = document.getElementById("city").value
       
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b7ae920530951c1c4f8e62d79f6b5c9a`

    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (res){
            append(res)
            console.log(res)
            // pura data aayega 
            // console.log(res.main.temp)    
            // jo cahiye wohi aayega (.main.temp ---> folder.data )
        })
        .catch(function (err){
            console.log(err)
        })
  }

// Current Location start


  function getDataLocation(lat, lon){
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b7ae920530951c1c4f8e62d79f6b5c9a`;

    fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      append(res);
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });


  }
      // Current Location end
     function append(data){
         let container = document.getElementById("container")
         let map = document.getElementById("gmap_canvas")
         container.innerHTML = null

    
         
         let city = document.createElement('h2')
         city.innerText =  `City: ${data.name}`

         let min = document.createElement("p")
         min.innerHTML = '<i class="fa-solid fa-temperature-low"></i> ' + `Min temp: ${data.main.temp_min}` + " °C"

         let max = document.createElement("p")
         max.innerHTML = '<i class="fa-solid fa-temperature-high"></i> ' + `Max temp: ${data.main.temp_max}` + " °C"

         let curr = document.createElement("p")
         curr.innerHTML = '<i class="fa-solid fa-temperature-half"></i> ' + `Current temp: ${data.main.temp}` + " °C"
         

         let humi = document.createElement("p")
         humi.innerHTML = '<i class="fa-solid fa-droplet"></i> ' + `Humidity: ${data.main.humidity}` + " %"

         let speed = document.createElement("p")
         speed.innerHTML = '<i class="fa-solid fa-wind"></i> ' + `Wind Speed: ${data.wind.speed}` + " Km/h"

         let sunr = document.createElement("p")
         sunr.innerHTML = '<i class="fa-solid fa-cloud-sun"></i> ' + `Sun Rise: ${(data.sys.sunrise)/360000000}` + " hrs"

         let suns = document.createElement("p")
         suns.innerHTML = '<i class="fa-solid fa-cloud-sun"></i> ' + `Sun Set: ${(data.sys.sunset)/360000000}` + " hrs"

        

          
         container.append( city, min, max, curr, humi, speed, sunr, suns)

         map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;


     }
     
     function getWeather(){
     navigator.geolocation.getCurrentPosition(success);
     function success(position) {
        var crd = position.coords;
      
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        getDataLocation(crd.latitude, crd.longitude)

      }
    }
