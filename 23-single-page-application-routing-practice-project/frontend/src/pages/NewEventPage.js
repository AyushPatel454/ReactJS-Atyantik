import { useEffect, useState } from "react";

export default function NewEventPage() {

  const [data, setData] = useState();
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function sendData() {
      const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);
      setMessage(responseData.message);
    }
    if (data) {
      console.log(data);
      sendData();
    }
  }, [data]);



  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const date = event.target.elements.date.value;
    const image = event.target.elements.image.value;
    const eventData = { title, description, date, image };
    // console.log(eventData);
    setData(eventData);
    event.target.reset();
  }
  return (
    <div>
      {message && <p className="server-message">{message}</p>}
      <h1>Add a new Event.</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" id="title" name="title" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea id="description" name="description" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" id="date" name="date" required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Image</label>
          <input type="url" id="image" name="image" required className="form-input" />
        </div>
        <button type="submit" className="form-button">Create Event</button>
      </form>
    </div>
  );
}