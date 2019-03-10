import { selectors } from "./base";

export const getInput = () => selectors.inputSearch.value;
export const clearInput = () => {
  selectors.inputSearch.value = "";
};
export const clearReult = () => {
  selectors.result.innerHTML = "";
};

export const renderWeather = weather => {
  const kelvin = 273.15;

  //wczytuje wszystkie temperatury do jednej tabeli z dnia
  const tempTomorrow = [
    weather.list[4].main.temp,
    weather.list[5].main.temp,
    weather.list[6].main.temp,
    weather.list[7].main.temp,
    weather.list[8].main.temp,
    weather.list[9].main.temp,
    weather.list[10].main.temp,
    weather.list[11].main.temp
  ];
  //Szukam najmniejszej i najwiekszej temperatury w tym dniu
  const minTomorrow = Math.min.apply(Math, tempTomorrow);
  const maxTomorrow = Math.max.apply(Math, tempTomorrow);
  // console.log(tempMinTomorrow);
  const tempDay3 = [
    weather.list[12].main.temp,
    weather.list[13].main.temp,
    weather.list[14].main.temp,
    weather.list[15].main.temp,
    weather.list[16].main.temp,
    weather.list[17].main.temp,
    weather.list[18].main.temp,
    weather.list[19].main.temp
  ];
  const minTempDay3 = Math.min.apply(Math, tempDay3);
  const maxTempDay3 = Math.max.apply(Math, tempDay3);

  const tempDay4 = [
    weather.list[20].main.temp,
    weather.list[21].main.temp,
    weather.list[22].main.temp,
    weather.list[23].main.temp,
    weather.list[24].main.temp,
    weather.list[25].main.temp,
    weather.list[26].main.temp,
    weather.list[27].main.temp
  ];
  const minTempDay4 = Math.min.apply(Math, tempDay4);
  const maxTempDay4 = Math.max.apply(Math, tempDay4);

  const tempDay5 = [
    weather.list[28].main.temp,
    weather.list[29].main.temp,
    weather.list[30].main.temp,
    weather.list[31].main.temp,
    weather.list[32].main.temp,
    weather.list[33].main.temp,
    weather.list[34].main.temp,
    weather.list[35].main.temp
  ];
  const minTempDay5 = Math.min.apply(Math, tempDay5);
  const maxTempDay5 = Math.max.apply(Math, tempDay5);

  const temp2 = weather.list[8].main.temp - kelvin;

  const temp3 = weather.list[16].main.temp - kelvin;

  const temp4 = weather.list[24].main.temp - kelvin;

  const temp5 = weather.list[32].main.temp - kelvin;

  const wind1 = weather.list[0].wind.speed * 3.6;
  const wind2 = weather.list[8].wind.speed * 3.6;
  const wind3 = weather.list[16].wind.speed * 3.6;
  const wind4 = weather.list[24].wind.speed * 3.6;
  const wind5 = weather.list[32].wind.speed * 3.6;
  const town = `
  <div class="result__box">
          <h1 class="result__name wow fadeInDown">
          ${weather.city.name}, ${weather.city.country}<img
              class="flag"
              src="https://www.countryflags.io/${
                weather.city.country
              }/shiny/64.png"
              alt="Flaga"
            />
          </h1>

          <div class="result__info wow fadeInRight" data-wow-delay="1s">
            <div class="result__day-wrapper">
              <h2 class="result__day">Today</h2>
              <img
                src="https://openweathermap.org/img/w/${
                  weather.list[0].weather[0].icon
                }.png"
                alt="Weather condition"
              />
              <span class="result__description">${
                weather.list[0].weather[0].description
              }</span>
            </div>
            <div class="result__details">
              <span class="result__temperature"
                ><i class="fas fa-thermometer-half" style="color: goldenrod"></i
                >Temperature: ${(
                  weather.list[0].main.temp - kelvin
                ).toFixed()}&#8451;</span
              >
              <span class="result__min-temp"
                ><i class="fas fa-thermometer-empty" style="color: aqua"></i>Min
                temp: ${(
                  weather.list[0].main.temp_min - kelvin
                ).toFixed()}&#8451;</span
              >
              <span class="result__max-temp"
                ><i class="fas fa-thermometer-full" style="color:crimson"></i
                >Max temp: ${(
                  weather.list[0].main.temp_max - kelvin
                ).toFixed()}&#8451;</span
              >
              <span class="result__wind-speed"
                ><i class="fas fa-wind" style="color: blue"></i>Wind speed: ${wind1.toFixed()}
                km/h</span
              >
              <span class="result__humidity"
                ><i class="fas fa-tint"></i>Humidity: ${
                  weather.list[0].main.humidity
                }%</span
              >
              <span class="result__pressure"
                ><i class="fas fa-compress" style="color: red"></i>Pressure:
                ${weather.list[0].main.pressure}</span
              >
              <span class="result__cloudiness"
                ><i class="fas fa-cloud" style="color: lightblue"></i
                >Cloudiness: ${weather.list[0].clouds.all}%</span
              >
            </div>
          </div>
        

      <div class="result__info wow fadeInRight" data-wow-delay="1.5s">
            <div class="result__day-wrapper">
              <h2 class="result__day">Tomorrow</h2>
              <img
                src="http://openweathermap.org/img/w/${
                  weather.list[8].weather[0].icon
                }.png"
                alt="Weather condition"
              />
              <span class="result__description">${
                weather.list[8].weather[0].description
              }</span>
            </div>
            <div class="result__details">
              <span class="result__temperature"
                ><i class="fas fa-thermometer-half" style="color: goldenrod"></i
                >Temperature: ${temp2.toFixed()}&#8451;</span
              >
              <span class="result__min-temp"
                ><i class="fas fa-thermometer-empty" style="color: aqua"></i>Min
                temp: ${(minTomorrow - kelvin).toFixed()}&#8451;</span
              >
              <span class="result__max-temp"
                ><i class="fas fa-thermometer-full" style="color:crimson"></i
                >Max temp: ${(maxTomorrow - kelvin).toFixed()}&#8451;</span
              >
              <span class="result__wind-speed"
                ><i class="fas fa-wind" style="color: blue"></i>Wind speed: ${wind2.toFixed()}
                km/h</span
              >
              <span class="result__humidity"
                ><i class="fas fa-tint"></i>Humidity: ${
                  weather.list[8].main.humidity
                }%</span
              >
              <span class="result__pressure"
                ><i class="fas fa-compress" style="color: red"></i>Pressure:
                ${weather.list[8].main.pressure}</span
              >
              <span class="result__cloudiness"
                ><i class="fas fa-cloud" style="color: lightblue"></i
                >Cloudiness: ${weather.list[8].clouds.all}%</span
              >
            </div>
          </div>
        

        <div class="result__info wow fadeInRight" data-wow-delay="2s">
        <div class="result__day-wrapper">
          <h2 class="result__day">${weather.list[16].dt_txt.substr(5, 11)}</h2>
          <img
            src="http://openweathermap.org/img/w/${
              weather.list[16].weather[0].icon
            }.png"
            alt="Weather condition"
          />
          <span class="result__description">${
            weather.list[16].weather[0].description
          }</span>
        </div>
        <div class="result__details">
          <span class="result__temperature"
            ><i class="fas fa-thermometer-half" style="color: goldenrod"></i
            >Temperature: ${temp3.toFixed()}&#8451;</span
          >
          <span class="result__min-temp"
            ><i class="fas fa-thermometer-empty" style="color: aqua"></i>Min
            temp: ${(minTempDay3 - kelvin).toFixed()}&#8451;</span
          >
          <span class="result__max-temp"
            ><i class="fas fa-thermometer-full" style="color:crimson"></i
            >Max temp: ${(maxTempDay3 - kelvin).toFixed()}&#8451;</span
          >
          <span class="result__wind-speed"
            ><i class="fas fa-wind" style="color: blue"></i>Wind speed: ${wind3.toFixed()}
            km/h</span
          >
          <span class="result__humidity"
            ><i class="fas fa-tint"></i>Humidity: ${
              weather.list[16].main.humidity
            }%</span
          >
          <span class="result__pressure"
            ><i class="fas fa-compress" style="color: red"></i>Pressure:
            ${weather.list[16].main.pressure}</span
          >
          <span class="result__cloudiness"
            ><i class="fas fa-cloud" style="color: lightblue"></i
            >Cloudiness: ${weather.list[16].clouds.all}%</span
          >
        </div>
      </div>

      <div class="result__info wow fadeInRight" data-wow-delay="2.5s">
      <div class="result__day-wrapper">
        <h2 class="result__day">${weather.list[24].dt_txt.substr(5, 11)}</h2>
        <img
          src="http://openweathermap.org/img/w/${
            weather.list[24].weather[0].icon
          }.png"
          alt="Weather condition"
        />
        <span class="result__description">${
          weather.list[24].weather[0].description
        }</span>
      </div>
      <div class="result__details">
        <span class="result__temperature"
          ><i class="fas fa-thermometer-half" style="color: goldenrod"></i
          >Temperature: ${temp4.toFixed()}&#8451;</span
        >
        <span class="result__min-temp"
          ><i class="fas fa-thermometer-empty" style="color: aqua"></i>Min
          temp: ${(minTempDay4 - kelvin).toFixed()}&#8451;</span
        >
        <span class="result__max-temp"
          ><i class="fas fa-thermometer-full" style="color:crimson"></i
          >Max temp: ${(maxTempDay4 - kelvin).toFixed()}&#8451;</span
        >
        <span class="result__wind-speed"
          ><i class="fas fa-wind" style="color: blue"></i>Wind speed: ${wind4.toFixed()}
          km/h</span
        >
        <span class="result__humidity"
          ><i class="fas fa-tint"></i>Humidity: ${
            weather.list[24].main.humidity
          }%</span
        >
        <span class="result__pressure"
          ><i class="fas fa-compress" style="color: red"></i>Pressure:
          ${weather.list[24].main.pressure}</span
        >
        <span class="result__cloudiness"
          ><i class="fas fa-cloud" style="color: lightblue"></i
          >Cloudiness: ${weather.list[24].clouds.all}%</span
        >
      </div>
    </div>

    <div class="result__info wow fadeInRight" data-wow-delay="3s">
    <div class="result__day-wrapper">
      <h2 class="result__day">${weather.list[32].dt_txt.substr(5, 11)}</h2>
      <img
        src="http://openweathermap.org/img/w/${
          weather.list[32].weather[0].icon
        }.png"
        alt="Weather condition"
      />
      <span class="result__description">${
        weather.list[32].weather[0].description
      }</span>
    </div>
    <div class="result__details">
      <span class="result__temperature"
        ><i class="fas fa-thermometer-half" style="color: goldenrod"></i
        >Temperature: ${temp5.toFixed()}&#8451;</span
      >
      <span class="result__min-temp"
        ><i class="fas fa-thermometer-empty" style="color: aqua"></i>Min
        temp: ${(minTempDay5 - kelvin).toFixed()}&#8451;</span
      >
      <span class="result__max-temp"
        ><i class="fas fa-thermometer-full" style="color:crimson"></i
        >Max temp: ${(maxTempDay5 - kelvin).toFixed()}&#8451;</span
      >
      <span class="result__wind-speed"
        ><i class="fas fa-wind" style="color: blue"></i>Wind speed: ${wind5.toFixed()}
        km/h</span
      >
      <span class="result__humidity"
        ><i class="fas fa-tint"></i>Humidity: ${
          weather.list[32].main.humidity
        }%</span
      >
      <span class="result__pressure"
        ><i class="fas fa-compress" style="color: red"></i>Pressure:
        ${weather.list[32].main.pressure}</span
      >
      <span class="result__cloudiness"
        ><i class="fas fa-cloud" style="color: lightblue"></i
        >Cloudiness: ${weather.list[32].clouds.all}%</span
      >
    </div>
  </div>


    </div>
    

    
  
    `;

  selectors.result.insertAdjacentHTML("beforeend", town);
};
