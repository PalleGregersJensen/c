import endpoint  from './endpoint';

async function getAllCityTours() {
    const response = await fetch(`${endpoint}/city-tours`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

export { getAllCityTours };