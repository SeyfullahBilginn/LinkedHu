/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const JOB_API_BASE_URL = "http://localhost:8084/api/V1/jobs";

class JobsService {
  getJobs() {
    return axios.get(JOB_API_BASE_URL);
  }

  getJob(id) {
    return axios.get(`${JOB_API_BASE_URL}/${id}`);
  }

  updateJob(id, jobDetails) {
    return axios.put(`${JOB_API_BASE_URL}/${id}`, jobDetails);
  }

  deleteJob(id) {
    return axios.delete(`${JOB_API_BASE_URL}/${id}`);
  }

  postJob(title, description, link, currentUser) {
    const data = {
      title: title,
      description: description,
      image: "image2",
      link: link,
      userId: currentUser.id,
    };
    return axios.post(JOB_API_BASE_URL, data);
  }
}

export default new JobsService();
