import { useNavigate, json } from "react-router";
import { useLoaderData } from "react-router";


export default function EventsPage() {
    // useLoaderData is a hook that returns the data from the loader function.
    const data = useLoaderData(); // destructuring the events from the data object
    const navigate = useNavigate();

    // If the data object has an isError property, means the loader function can not abel to fetch the data & something guess wrong.
    if(data.isError) {
        return <p>{data.message}</p>;
    }

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
                data.events.map(event => (
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

export async function loader() {
    const response = await fetch('http://localhost:8080/eventssss');

    if (!response.ok) {
        // ... handle error
        // return {isError: true, message: 'Can not fetch the events data.'};
        // throw {message: 'Can not fetch the events data.'};
        // throw new Response(JSON.stringify({message: 'Can not fetch the events data.'}), {status: 500}); // Return the object of Response class. (React auto converts it to JSON for us.)
        throw json({message: 'Can not fetch the events data.'}, {status: 500}); // Return the object of Response class. (React auto converts it to JSON for us.
    } else {
        return response; // Return the object of Response class. (React auto converts it to JSON for us.)
    }
}