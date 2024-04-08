import endpoint from "./endpoint";

async function getAllTourDates() {
    const response = await fetch(`${endpoint}/tour-dates`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    return data;
}

export { getAllTourDates };
