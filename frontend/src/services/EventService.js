/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const EVENT_API_BASE_URL = "http://localhost:8084/api/V1/events";

class EventService {
  getEvents() {
    return axios.get(EVENT_API_BASE_URL);
  }

  getEvent(id) {
    return axios.get(`${EVENT_API_BASE_URL}/${id}`);
  }

  deleteEvent(id) {
    return axios.delete(`${EVENT_API_BASE_URL}/${id}`);
  }

  updateEvent(id, eventDetails) {
    return axios.put(`${EVENT_API_BASE_URL}/${id}`, eventDetails);
  }

  postEvent(title, description, currentUser) {
    const data = {
      title: title,
      description: description,
      image: "image2",
      userId: currentUser.id,
    };

    return axios.post(EVENT_API_BASE_URL, data);
  }
}

export default new EventService();
