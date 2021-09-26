

    //------INTITALIZE VARIABLES---------//
    const cityName = document.getElementById('cityName');
    const crossBtn=document.getElementById('crossBtn');
    const logShow= document.getElementById('logShow');
    const logTable= document.getElementById('logTable');
    const Live= document.getElementById('Live');
//------EVENT LISTENERS---------//
    cityName.onchange= ()=>
        {
             fetchWeather();
             localStorage.setItem("lastLocation", `${cityName.value}`);
        }

    cityName.onkeyup= ()=>crossBtn.style.display=(cityName.value==""?'none':'inline-block')
        

    crossBtn.onclick=()=>
        {
            cityName.value='';
            crossBtn.style.display="none" 
        }

    window.addEventListener('load',()=>
        {       
            cityName.value=`${localStorage.getItem("lastLocation")}`;            
            crossBtn.style.display=(cityName.value==""?'none':'inline-block')
            fetchWeather();
        })

    logShow.onclick =()=>
    {
        document.getElementById('tableWrapper').classList.toggle('block');
        if (logShow.innerHTML === "Show Logs") {
            logShow.innerHTML = "Hide Logs";
          } else {
            logShow.innerHTML = "Show Logs";
          }
    }
    Live.onclick=fetchLocation;

        //------API CALL---------//
    function fetchLocation()
        {
            if(navigator.geolocation)
        {
                navigator.geolocation.getCurrentPosition(position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                
             fetchWeatherLive(lat,long) 
            })
        }
    }
  
    function fetchWeather(city)
    {    var cityQuery=city||cityName.value
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&units=metric&appid={API_KEY}`)
        .then(res=> res.json())
        .then(data=> showData(data))
        .catch(err=>
        {
        document.getElementById('temp').innerHTML=` -- `;
        document.getElementById('location').innerHTML= `<i class="fas fa-map-marker"></i> &nbsp; Location Data Not Available`;
        document.getElementById('humidity').innerHTML=`-- %`
        document.getElementById('minTemp').innerHTML=`-- <sup>o</sup>`
        document.getElementById('maxTemp').innerHTML=`-- <sup>o</sup>`
        document.getElementById('windSpeed').innerHTML=`-- m/s`
        console.log('error hai',err)
        })
    }
    function fetchWeatherLive(lati,longi)
    
    {    
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&units=metric&appid=aa8fafad6088c959ffa5045db2e9d1a8`)
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=aa8fafad6088c959ffa5045db2e9d1a8`)
        .then(res=> res.json())
        .then(data=>showData(data))
        .catch(err=>
        {
        document.getElementById('temp').innerHTML=` -- `;
        document.getElementById('location').innerHTML= `<i class="fas fa-map-marker"></i> &nbsp; Location Data Not Available`;
        document.getElementById('humidity').innerHTML=`-- %`
        document.getElementById('minTemp').innerHTML=`-- <sup>o</sup>`
        document.getElementById('maxTemp').innerHTML=`-- <sup>o</sup>`
        document.getElementById('windSpeed').innerHTML=`-- m/s`
        console.log('error:',err)
        })
    }

    function showData(data)
    
        {  
            var dataMain=data.main 
            var temp=(dataMain.temp).toFixed(1);
            var humidity=dataMain.humidity; 
            var name= data.name + ' , ' + (data.sys.country);
            var condition = (data.weather[0].main);
            console.log(condition)
            document.getElementById('temp').innerHTML=`${temp}` + `<sup>o</sup>`;
            document.getElementById('location').innerHTML= `<i class="fas fa-map-marker"></i>&nbsp;&nbsp;`+ `${name}`;
            document.getElementById('humidity').innerHTML=`${humidity} %`
            document.getElementById('minTemp').innerHTML=`${dataMain.temp_min} <sup>o</sup>`
            document.getElementById('maxTemp').innerHTML=`${dataMain.temp_max} <sup>o</sup>`
            document.getElementById('windSpeed').innerHTML=`${(data.wind.speed*3.6).toFixed(1)} km/hr`
           logTable.innerHTML+=`<tr><td>${name}</td><td>${condition}</td><td>${dataMain.temp_min}</td><td>${dataMain.temp_max}</td><td>${humidity}%</td><td>${(data.wind.speed*3.6).toFixed(1)}</td><td onclick="addBookmark('${name}'); this.firstChild.classList.add('fas'); this.style.pointerEvents='none'"><i class="far fa-bookmark"></i></td></tr>`
            const conditionDiv= document.getElementById('condition');
            const conditionImg=document.getElementById('weatherImg');
           
            if(temp>10)
            {
                switch (condition)
                {
                    case 'Clouds':  conditionDiv.innerText="Cloudy";
                                    conditionImg.src= (isMorning() ?'images/cloudDay.webp'  : 'images/cloudNight.jpg'); 
                                    break;
    
                    case 'Rain'  : conditionDiv.innerText="Rainy";       
                                conditionImg.src="images/rain.jpg"; 
                                break;
                    
                    case 'Clear' : conditionDiv.innerText="Clear";
                                    conditionImg.src= (isMorning() ?'images/clearDay.jpg'  : '/images/clearNight.jpg');
                                    break;
                    
                    case 'Thunderstorm' : conditionDiv.innerText="Thunderstorm";
                                    conditionImg.src= '/images/thunder.jpg';
                                    break;
                            
                    case 'Haze' :  conditionDiv.innerText="Haze";
                                   conditionImg.src='images/haze.jpg'
                                   break;

                    case 'Mist':conditionDiv.innerText="Haze";
                                   conditionImg.src='images/haze.jpg'
                                   break;
                }
            }
    
            else if( temp< 10){
                conditionDiv.innerText="Cold";
                conditionImg.src= (data<18 ?' images/coldDay.jpg'  : 'images/coldNight.jpg')
    
            }
    }
        
    function isMorning()
    {
        const amOrPm= new Date().toLocaleTimeString().split(':')[2].split(' ')[1];
        const time= new Date().toLocaleTimeString().split(':')[0];
        console.log(new Date().toLocaleTimeString())
        return (amOrPm=="AM"?true:false)
    }



    function addBookmark(city)
    {
    document.getElementById('bookMarkProfileWrapper').innerHTML+=`<div class="bookMarkProfile" onclick="fetchWeather('${city}'); document.getElementById('weatherCard').scrollIntoView();" >
    <span class="deleteMark" onclick="this.parentElement.remove()">&times;</span>
    <span id="bookMarkCity">${city}</span></div>`;
    document.getElementById('bookMarkProfileWrapper').scrollIntoView();
    }
