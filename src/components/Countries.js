import { useEffect, useState } from "react";
import Country from "./Country";
import FilterCountries from "./FilterCountries";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setfilteredCountries] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch('https://restcountries.com/v2/all').then(data => data.json()).then(data => {
            setCountries(data.map(country => ({
                name: country.name,
                capital: country.capital || "",
                region: country.region,
                area: country.area || 0,
                population: country.population || 0,
                alpha3Code: country.alpha3Code
            })));
       }) 
    }, [])

    function filterCountries(value) {
        const searchValue = value.toLowerCase();
        setSearch(searchValue);
        const filtered = countries.filter(country => country.name
            .toLowerCase().includes(searchValue) || country.capital
            .toLowerCase().includes(searchValue) || country.region
            .toLowerCase().includes(searchValue));
        setfilteredCountries(filtered);
    }

    return <div className={'container'}>
        <FilterCountries filterCountries={filterCountries}/>
        <table>
            <thead><tr><th>Name</th><th>Capital</th><th>Region</th><th>Area</th><th>Population</th></tr></thead>
            <tbody>
                {(search ? filteredCountries : countries).map(country => <Country key={country.alpha3Code} country={country} />)}
                {search && !filteredCountries.length ? <tr>
                    <td colSpan={5} style={{textAlign: 'center'}}>No Results Found</td>
                </tr> : ""}
            </tbody>
        </table>
    </div>
}

export default Countries;