import React, { useState, useEffect } from "react";
import { getAllTourDates } from "../rest-service/tour-dates";
import { useNavigate } from "react-router-dom";

export default function TourDates() {
    const [tourDates, setTourDates] = useState([]);
    const [selectedTour, setSelectedTour] = useState(null); // Add state for selected tour
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const tours = await getAllTourDates();
            setTourDates(tours);
        };

        fetchData();
    }, []);

    const bookSpecificTour = (tour) => {
        console.log("Book tour " + tour.cityTour.nameOfTour);
        setSelectedTour(tour); // Set the selected tour when the button is clicked
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <>
            <h3>Tour Dates</h3>
            <p>Book a tour with us!</p>
            <div className="row">
                {tourDates.map((tourDate) => (
                    <div key={tourDate.id} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">{tourDate.cityTour.nameOfTour}</h2>
                                <p className="card-text">
                                    <strong>This tour takes place at:</strong> {tourDate.timeAndDate}
                                </p>
                                <p className="card-text">
                                    <strong>Vacant positions at this tour:</strong> {tourDate.capacity}
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        bookSpecificTour(tourDate);
                                    }}
                                >
                                    Book this tour
                                </button>
                                {selectedTour &&
                                    selectedTour.id === tourDate.id && ( // Show the form only for the selected tour
                                        <form onSubmit={handleSubmit}>
                                            {/* Form content goes here */}
                                            <div className="form-group">
                                                <label htmlFor="name">Name:</label>
                                                <input type="text" id="name" name="name" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label>
                                                <input type="email" id="email" name="email" className="form-control" />
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Submit
                                            </button>
                                        </form>
                                    )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
