/*---------------------------------------------------------------
        Country Javascript  Start               
---------------------------------------------------------------*/


//Country Button
const lodeCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(rep => rep.json())
    .then(data => countriesAll(data))
}

const countriesAll = countrys => {
    const countryDiv = document.getElementById('countrys');
   
    countrys.forEach(country => {

        const ul = document.createElement('ul');
        ul.innerHTML = `<li>${country.name}</li> <p>${country.capital}</p>
        <button onclick ="CountryBNyame('${country.name}')">Detles</button>`
        countryDiv.appendChild(ul);        
        //console.log(country)        
    });


};


// Country Name

const CountryBNyame =  name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(rep => rep.json())
    .then(data => seeCountryDealts(data[0]))
};


const seeCountryDealts = countries =>{
    console.log(countries)
    const counntryDetails = document.getElementById('country_detail');
    counntryDetails.innerHTML = `<h3>Name: ${countries.name}</h3>
    <h4>Capital: ${countries.capital}</h4> 
    <p>Population:${countries.population}</p>
    <img width='300px' src="${countries.flag}">`
};



/*---------------------------------------------------------------
        Country Javascript  End               
---------------------------------------------------------------*/