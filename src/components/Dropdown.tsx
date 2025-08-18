import { useEffect, useState } from "react";
import { Countries } from "../interfaces/interfaces";

function CityDropdown() {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pakistan", value: "PAK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittangong"] },
  ];

  const [transformedCountries, setTransformedCountries] = useState<string[]>(
    []
  );

  /* 
{ "India": ["Delhi", "Mumbai"], ... } 
*/

  useEffect(() => {
    // let temp: Countries = {};
    // for (const country of countries) {
    //   temp[country.name] = country.cities;
    // }
    // setTransformedCountries(temp);
  }, []);

  function selectCountries(event: any) {
    let temp: string[] = [];
    for (const country of countries) {
      if (country.name === event.target.value) {
        temp = country.cities;
      }
    }
    setTransformedCountries(temp);
  }

  return (
    <>
      <h2 className="mt-10 flex justify-center items-center text-xl font-bold">
        Nested Dropdown
      </h2>
      <div className="text-center">
        <label htmlFor="country">Choose a country:</label>
        <select name="country" id="country" onChange={selectCountries}>
          {countries.map((country) => {
            return (
              <option value={country.name} key={country.value}>
                {country.name}
              </option>
            );
          })}
        </select>
        <br></br>
        {transformedCountries.length ? (
          <>
            <label htmlFor="cities">Choose a city:</label>
            <select name="cities" id="cities">
              {transformedCountries.map((city) => {
                return (
                  <option value={city} key={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </>
        ) : null}
      </div>
    </>
  );
}

export default CityDropdown;
