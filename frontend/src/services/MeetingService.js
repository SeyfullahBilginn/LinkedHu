/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const MEETING_API_BASE_URL = "http://localhost:8084/api/V1/meetings";

class MeetingsService {
  getMeetings() {
    return axios.get(MEETING_API_BASE_URL);
  }

  getMeeting(id) {
    return axios.get(`${MEETING_API_BASE_URL}/${id}`);
  }

  deleteMeeting(id) {
    return axios.delete(`${MEETING_API_BASE_URL}/${id}`);
  }

  updateMeeting(id, meetingDetails) {
    return axios.put(`${MEETING_API_BASE_URL}/${id}`, meetingDetails);
  }

  postMeeting(title, description, link, id) {
    const data = {
      title: title,
      description: description,
      link: link,
      userId: id,
    };
    return axios.post(MEETING_API_BASE_URL, data);
  }
}

export default new MeetingsService();
