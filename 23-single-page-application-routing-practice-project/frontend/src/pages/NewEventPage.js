import { Form, json, redirect } from "react-router-dom";

export default function NewEventPage() {

  return (
    <div>
      <h1>Add a new Event.</h1>
      <Form method="post" className="form">
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
      </Form>
    </div>
  );
}

export async function action({request, params}) {
  const data = await request.formData();

  const eventData = {
    title: data.get("title"),
    description: data.get("description"),
    date: data.get("date"),
    image: data.get("image"),
  }

  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if(!response.ok) {
    throw json({message: "Can not create the event."}, {status: 500});
  }

  return redirect("/events");
}