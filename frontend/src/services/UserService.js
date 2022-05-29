/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const API_BASE_URL = "http://localhost:8084/api/V1/sign-in";
const USER_API_BASE_URL = "http://localhost:8084/api/V1/users";
const POST_API_BASE_URL = "http://localhost:8084/api/V1/posts";

class UserService {
  getUsers() {
    return axios.get(USER_API_BASE_URL);
  }

  getUsersWithoutId(id) {
    return axios.get(`${USER_API_BASE_URL}/without/${id}`);
  }

  getUser(id) {
    return axios.get(`${USER_API_BASE_URL}/${id}`);
  }

  signInUser(email, password) {
    return axios.get(API_BASE_URL, { params: { email: email, password: password } });
  }

  // signup new user
  // eslint-disable-next-line class-methods-use-this
  postUser(user) {
    return axios.post(USER_API_BASE_URL, user);
  }

  getUserPosts(userId) {
    return axios.get(`${POST_API_BASE_URL}/${userId}`);
  }

  updateUser(userId, userDetails) {
    return axios.put(`${USER_API_BASE_URL}/${userId}`, userDetails);
  }
}

export default new UserService();
