/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const EVENTS_LIKE_API_BASE_URL = "http://localhost:8084/api/V1/events";
const MEETINGS_LIKE_API_BASE_URL = "http://localhost:8084/api/V1/meetings";
const JOBS_LIKE_API_BASE_URL = "http://localhost:8084/api/V1/jobs";

class LikeService {
  getEventLikes(userId, postId) {
    const data = { userId: userId, postId: postId };
    return axios.put(`${EVENTS_LIKE_API_BASE_URL}/like`, data);
  }

  getMeetingLikes(userId, postId) {
    const data = { userId: userId, postId: postId };
    return axios.put(`${MEETINGS_LIKE_API_BASE_URL}/like`, data);
  }

  getJobLikes(userId, postId) {
    const data = { userId: userId, postId: postId };
    return axios.put(`${JOBS_LIKE_API_BASE_URL}/like`, data);
  }
}

export default new LikeService();
