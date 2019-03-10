export const selectors = {
  inputSearch: document.querySelector(".search__field"),
  formSearch: document.querySelector(".search"),
  result: document.querySelector(".result"),
  body: document.body
};

export const renderLoader = el => {
  const loader = `
    <div class="loader">
          <svg>
            <use href="./img/icon.svg#icon-light-up"></use>
          </svg>
        </div>
    `;
  el.insertAdjacentHTML("afterbegin", loader);
};

export const clearLoader = () => {
  const loader = document.querySelector(".loader");
  if (loader) loader.parentElement.removeChild(loader);
};

// export const changeBackground = () => {
//   if (weather.list[0].main.temp - kelvin > 17) {
//     body.style.backgroundColor = "yellow";
//   }
// };
