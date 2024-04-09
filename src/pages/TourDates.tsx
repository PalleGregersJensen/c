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
                                <button className="btn btn-primary">Book this tour</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}