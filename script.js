let api_key = "eb6b7eb0e66008919d694f449dbefb8d";

let body=document.body;
let searchboxcontainer=document.querySelector(".searchboxcontainer");
let main=document.querySelector(".main");
let base_url = "https://api.openweathermap.org/data/2.5/weather";
let textfield = document.getElementById("textfield");
let cityname = document.getElementById("citydisplay");
let searchbutton = document.getElementById("button1");
let windspeed = document.getElementById("speed");
let wind = document.getElementById("wind");
let humidity = document.getElementById("humidity");
let humidityimg = document.getElementById("humidityimg");
let mainimg = document.getElementById("mainimg");
let windimg = document.getElementById("windimg");
let humidityperc = document.getElementById("humidityperc");

let tempdisplay = document.getElementById("tempdisplay");

const getcityname = async () => 
{
    try 
    {
        let textfieldvalue = textfield.value;
        textfieldvalue = textfieldvalue[0].toUpperCase() + textfieldvalue.slice(1);
        let endpoint = `?q=${textfieldvalue}`;
        let param = `&appid=${api_key}&units=metric`;
        let fullurl = `${base_url}${endpoint}${param}`;
        let response = await fetch(fullurl);
        if (response.ok) 
        {
            let jsobject = await response.json();

            if (textfieldvalue === jsobject.name) 
            {
                body.style.display="flex";
                body.style.alignItems="center";
                body.style.justifyContent="center";
                searchboxcontainer.style.backgroundImage="none";
                searchboxcontainer.style.alignItems="flex-start";
                searchboxcontainer.style.height="auto";
                main.style.marginTop="100px";
                main.style.borderRadius="20px";
                main.style.width="80%";
                main.style.bottom="20px%";
                cityname.innerHTML = jsobject.name;
                tempdisplay.innerHTML = Math.round(jsobject.main.temp) + `\u00B0C`;
                windspeed.innerHTML = jsobject.wind.speed;
                wind.innerHTML = "Wind Speed";
                windimg.style.display = "inline";
                humidityimg.style.display = "inline";
                // mainimg.style.display="inline";
                let word = jsobject.main.humidity;
                word += "%";
                humidityperc.innerHTML = word;
                humidity.innerHTML = "Humidity";
                switch (jsobject.weather[0].main) 
                {
                    case "Clouds": mainimg.src = "/Users/shan/Desktop/weather app/clouds.png";
                        mainimg.style.display = "inline";
                        break;
                    case "Drizzle": mainimg.src = "/Users/shan/Desktop/weather app/drizzle.png";
                        mainimg.style.display = "inline";
                        break;
                    case "Mist": mainimg.src = "/Users/shan/Desktop/weather app/mist.png";
                        mainimg.style.display = "inline";
                        break;
                    case "Rain": mainimg.src = "/Users/shan/Desktop/weather app/rain.png";
                        mainimg.style.display = "inline";
                        break;
                    case "Snow": mainimg.src = "/Users/shan/Desktop/weather app/snow.png";
                        mainimg.style.display = "inline";
                        break;
                }
            }
            else 
            {
                cityname.innerHTML = "Invalid city name<br>Please enter valid city name";
              
            }




        }
        else
        {
            cityname.innerHTML = "Invalid city name<br>Please enter valid city name";
        }



    }
    catch (error) 
    {
        cityname.innerHTML = "Invalid city name<br>Please enter valid city name";
        console.log(error);
    }
}


searchbutton.addEventListener("click", () => 
{
    getcityname().then((response) => 
    {
        console.log(response);
    })
})
textfield.addEventListener("keydown", (event) => 
    {
        if(event.key==="Enter")
            {
                getcityname().then((response) => 
                    {
                        console.log(response);
                    })
            }
      
    })

