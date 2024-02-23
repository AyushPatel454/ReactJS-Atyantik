import { useState, useEffect } from "react";
import { useParams } from "react-router";
import EventForm from "../components/MyForm";
import { Link } from "react-router-dom";

export default function EditEventPage() {
    const [eventData, setEventData] = useState();

    // this page edit the it's parent path data
    const {id} = useParams();

    useEffect(() => {
        async function fetchEvent() {
            const response = await fetch(`http://localhost:8080/events/${id}`);
            const responseData = await response.json();
            setEventData(responseData.event);
            console.log(responseData);
        }
        if(!eventData) {
            fetchEvent();
        }

    }, [id, eventData]);
  return (
    <div>
      <h1>Edit Event Page</h1>
      {eventData && <EventForm eventData={eventData} />}
      <Link to="../.." relative="path"><button className="event-button">Back to Events page.</button></Link>
    </div>
  );
}