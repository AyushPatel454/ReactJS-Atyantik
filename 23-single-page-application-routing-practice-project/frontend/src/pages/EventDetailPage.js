import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function EventDetailPage() {
    const [eventData, setEventData] = useState({});
    const { id } = useParams();

    useEffect(() => {
        async function fetchEvent() {
            const response = await fetch(`http://localhost:8080/events/${id}`);
            const responseData = await response.json();
            setEventData(responseData.event);
            console.log(responseData);
        }
        fetchEvent();
    }, [id]);

    return (
        <div>
            <h1>Event Detail Page</h1>
            <div className="event-card">
                <img src={eventData.image} alt={eventData.title} className="event-image" />
                <div className="event-content">
                    <h2 className="event-title">{eventData.title}</h2>
                    <p className="event-description">{eventData.description}</p>
                    <p className="event-date">{eventData.date}</p>
                </div>
                <Link to=".." relative="path"><button className="event-button">Back to Events page.</button></Link>
            </div>
        </div>
    );
}