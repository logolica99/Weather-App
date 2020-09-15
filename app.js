window.addEventListener('load', ()=>{
    let long;
    let lat;
    let temperatureDescription=document.querySelector('.temperature-description')
    let temperatureDegree=document.querySelector('.temperature-degree')
    let location = document.querySelector('.location-let')


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
           
            
           const b=`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3e7a157e81918a3a822579e617a79cbc`
           
           
           const api=`https://api.allorigins.win/get?url=${encodeURIComponent(b)}`
           
           fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data =>{
              let info = JSON.parse(data.contents)
                console.log(info);
                const temp=Math.floor(info.main.feels_like-273);
                temperatureDegree.textContent=temp
                const des=info.weather[0].description
                temperatureDescription.textContent=des.toUpperCase()
                location.textContent = info.name

            })
        });

    }else{
        h1.textContent = "please allow the location"
    }
});
//b=`https://api.allorigins.win/get?url=${encodeURIComponent('http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3e7a157e81918a3a822579e617a79cbc')}`