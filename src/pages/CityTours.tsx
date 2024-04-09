import { useEffect, useState } from "react";
import { getAllCityTours } from "../rest-service/cityTours";
import { useNavigate } from "react-router-dom";

export default function CityTours() {
    const [cityTours, setCityTours] = useState([]);
    const navigate = useNavigate(); // Hent navigationsfunktionen

    useEffect(() => {
        const fetchData = async () => {
            const tours = await getAllCityTours();
            setCityTours(tours);
        };

        fetchData();
    }, []);

    const handleBookTour = () => {
        console.log("Book tour");
        // Naviger til /tour-dates når der klikkes på knappen
        navigate(`/tour-dates`);
    };

    return (
        <div className="container">
            <h3 className="mb-4">City Tours</h3>
            <p className="mb-4">Explore the city with us!</p>
            <div className="row">
                {cityTours.map((cityTour) => (
                    <div key={cityTour.id} className="col-lg-4 col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{cityTour.nameOfTour}</h2>
                                <p className="card-text">
                                    <strong>Guide:</strong> {cityTour.guide}
                                </p>
                                <p className="card-text">
                                    <strong>Max number of guests:</strong> {cityTour.capacity}
                                </p>
                                <p className="card-text">
                                    <strong>Distance:</strong> {cityTour.distanceOfTour} km.
                                </p>
                                <p className="card-text">
                                    <strong>Price per person:</strong> {cityTour.price} Dkr.
                                </p>
                                <button className="btn btn-primary" onClick={() => handleBookTour()}>
                                    Book {cityTour.nameOfTour}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
