// import axios from 'axios';

// const key = '';

// export default class Search {
//     constructor(query){
//         this.query = query;

//     }
//     async getWeather(){
//         try{
//             const weather = await axios ();

//         }
//     }
// }
import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getResults(query) {
    const key = "b10af6aec43fd80647fc64535ed23b01";

    try {
      const res = await axios(
        `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?q=${
          this.query
        }&APPID=${key}`
      );
      this.result = res.data;
      // result = result - 273.15;

      // console.log(`${result.toFixed(1)} stopni Celsjusza`);
      // console.log(this.result);
    } catch (error) {
      alert("Something went wrong :( Try to type towns in English!");
    }
  }
}
