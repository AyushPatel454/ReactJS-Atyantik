import React, { useState, useEffect } from 'react';

export default function EventForm({ eventData }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [image, setImage] = useState('');
    const [updatedData, setUpdatedData] = useState();
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (eventData) {
            setTitle(eventData.title);
            setDescription(eventData.description);
            setDate(eventData.date);
            setImage(eventData.image);
        }
    }, [eventData]);

    useEffect(() => {
        async function updateData() {
            const response = await fetch(`http://localhost:8080/events/${eventData.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData),
            });

            const responseData = await response.json();
            console.log(responseData);
            setMessage(responseData.message);
        }
        if (updatedData) {
            console.log(updatedData);
            updateData();
        }
    }, [updatedData, eventData.id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submit logic here
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        const date = e.target.elements.date.value;
        const image = e.target.elements.image.value;
        setUpdatedData({ title, description, date, image });
    };

    return (
        <>
            {message && <p className="server-message">{message}</p>}
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" id="title" name="title" required className="form-input" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea id="description" name="description" required className="form-input" value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="date" id="date" name="date" required className="form-input" value={date} onChange={e => setDate(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="image" className="form-label">Image</label>
                    <input type="url" id="image" name="image" required className="form-input" value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <button type="submit" className="form-button">Update Event</button>
            </form>
        </>
    );
}