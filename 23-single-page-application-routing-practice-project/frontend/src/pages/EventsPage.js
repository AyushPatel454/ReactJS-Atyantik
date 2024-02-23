import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


export default function EventsPage() {
    const [events, setEvents] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchEvents() {
            const response = await fetch('http://localhost:8080/events');
            const responseData = await response.json();
            console.log(responseData.events);

            setEvents(responseData.events);
        }

        fetchEvents();
    }, []);

    function handleClick(id) {
        // navigate :id 
        navigate(`${id}`);
    }

    function handleEditClick(e, id) {
        e.stopPropagation(); // Prevents the click event from bubbling up to the parent div
        navigate(`${id}/edit`);
    }

    return (
        <div>
            <h1>Events Page</h1>
            {
                events.map(event => (
                    <div key={event.id} className="event-card" onClick={() => handleClick(event.id)}>
                        <img src={event.image} alt={event.title} className="event-image" />
                        <div className="event-content">
                            <h2 className="event-title">{event.title} - {event.date}</h2>
                            <p className="event-description">{event.description}</p>
                        </div>
                        <button className="event-edit-button" onClick={(e) => handleEditClick(e, event.id)}>Edit</button>
                    </div>
                ))
            }
        </div>
    );
}