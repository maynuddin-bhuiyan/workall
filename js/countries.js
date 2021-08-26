const lodeCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(rep => rep.json())
    .then(data => countriesAll(data))
}

const countriesAll = countrys => {
    const countryDiv = document.getElementById('countrys');
   
    countrys.forEach(country => {
        const p = document.createElement('p');
        const li = document.createElement('li');
        li.innerText = country.name;
        p.innerText = country.capital;
        countryDiv.appendChild(li);
        countryDiv.appendChild(p);

        console.log(country)
        
    });


}



