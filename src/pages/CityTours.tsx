import { useEffect, useState } from "react";
import { getAllCityTours } from "../rest-service/cityTours";

export default function CityTours() {
    const [cityTours, setCityTours] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tours = await getAllCityTours();
            setCityTours(tours);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>City Tours</h1>
            <p>Explore the city with us!</p>
            <ul>
                {cityTours.map((cityTour) => (
                    <li key={cityTour.id}>
                        <li>Name of tour: {cityTour.nameOfTour}</li>
                        <li>Guide on tour: {cityTour.guide}</li>
                        <li>Max number of guests on tour: {cityTour.capacity} people</li>
                        <li>Distance: {cityTour.distanceOfTour} km.</li>
                        <li>Price per person: {cityTour.price} Dkr.</li>
                    </li>
                ))}
            </ul>
        </div>
    );
}
