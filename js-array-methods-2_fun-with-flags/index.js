import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  event.preventDefault();
  container.innerHTML = "";

  const searchString = event.target.value;

  const foundCountry = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchString.toLowerCase())
  );

  if (foundCountry) {
    foundCountry.map((country) => {
      const countryElement = Country(country);
      container.append(countryElement);
    });
  }
});
