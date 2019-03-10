// import axios from "axios";
import Search from "./models/Search";
import * as resultView from "./views/resultView";
import {
  selectors,
  renderLoader,
  clearLoader,
  changeBackground
} from "./views/base";

//https://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=b10af6aec43fd80647fc64535ed23b01

// async function getResults(query) {
//   const key = "b10af6aec43fd80647fc64535ed23b01";

//   try {
//     const res = await axios(
//       `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${query}&APPID=${key}`
//     );
//     let result = res.data;
//     // result = result - 273.15;

//     // console.log(`${result.toFixed(1)} stopni Celsjusza`);
//     console.log(result);
//   } catch (error) {
//     alert(error);
//   }
// }

const state = {};

const searchController = async () => {
  const query = resultView.getInput();
  console.log(query);

  if (query) {
    // const temp = (state.search.result.list[0].main.temp - 273.15).toFixed();
    state.search = new Search(query);

    resultView.clearReult();
    resultView.clearInput();
    // changeBackground();

    renderLoader(selectors.result);
    await state.search.getResults();
    const temp = (state.search.result.list[0].main.temp - 273.15).toFixed();
    if (temp <= 5) {
      document.body.style.background =
        "linear-gradient(to right bottom, #667db6, #0082c8, #0082c8, #667db6)";
    } else if (temp > 5 && temp < 20) {
      document.body.style.background =
        "linear-gradient(to right bottom, #00b09b, #96c93d)";
    } else if (temp > 20) {
      document.body.style.background =
        "linear-gradient(to right bottom, #fc4a1a, #f7b733)";
    }

    console.log((state.search.result.list[0].main.temp - 273.15).toFixed());
    clearLoader();
    resultView.renderWeather(state.search.result);
  }
};

selectors.formSearch.addEventListener("submit", e => {
  e.preventDefault();
  searchController();
});

const search = new Search("Giżycko");
// console.log(search);
search.getResults();
