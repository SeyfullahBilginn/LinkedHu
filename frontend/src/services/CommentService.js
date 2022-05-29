/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const EVENTS_COMMENT_API_BASE_URL = "http://localhost:8084/api/V1/events";
const MEETINGS_COMMENT_API_BASE_URL = "http://localhost:8084/api/V1/meetings";
const JOBS_COMMENT_API_BASE_URL = "http://localhost:8084/api/V1/jobs";

class CommentService {
  addEventComment(userId, postId, text) {
    const data = { userId: userId, postId: postId, text: text };
    console.log(data);
    return axios.put(`${EVENTS_COMMENT_API_BASE_URL}/comment`, data);
  }

  addMeetingComment(userId, postId, text) {
    const data = { userId: userId, postId: postId, text: text };
    return axios.put(`${MEETINGS_COMMENT_API_BASE_URL}/comment`, data);
  }

  addJobComment(userId, postId, text) {
    const data = { userId: userId, postId: postId, text: text };
    return axios.put(`${JOBS_COMMENT_API_BASE_URL}/comment`, data);
  }
}

export default new CommentService();
