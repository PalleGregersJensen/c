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
            <div className="city-tours-container">
                {" "}
                {/* Opret en container til dine ture */}
                {cityTours.map((cityTour) => (
                    <div key={cityTour.id} className="city-tour-card">
                        {" "}
                        {/* Opret et kort for hver tur */}
                        <h2>{cityTour.nameOfTour}</h2>
                        <p>
                            <strong>Guide:</strong> {cityTour.guide}
                        </p>
                        <p>
                            <strong>Max number of guests:</strong> {cityTour.capacity}
                        </p>
                        <p>
                            <strong>Distance:</strong> {cityTour.distanceOfTour} km.
                        </p>
                        <p>
                            <strong>Price per person:</strong> {cityTour.price} Dkr.
                        </p>
                        <button>Book {cityTour.nameOfTour}</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
