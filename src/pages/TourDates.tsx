import React, { useState, useEffect } from "react";
import { getAllTourDates } from "../rest-service/tour-dates";

export default function TourDates() {
    const [tourDates, setTourDates] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tourDates = await getAllTourDates();
            setTourDates(tourDates);
        };

        fetchData();
    }, []);

    return (
        <>
            <h1>Tour Dates</h1>
            <p>Book a tour with us!</p>
            <div className="tour-dates-container">
                {tourDates.map((tourDate) => (
                    <div key={tourDate.id} className="tour-date-card">
                        <h2>{tourDate.cityTour.nameOfTour}</h2>
                        <p>
                            <strong>This tour takes place at: {tourDate.timeAndDate }</strong>
                        </p>
                        <p>
                            <strong>Vacancies positions at this tour:</strong> {tourDate.capacity}
                        </p>
                        <button>Book this tour</button>
                    </div>
                ))}
            </div>
        </>
    );
}
