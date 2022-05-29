/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const CONNECTION_API_BASE_URL = "http://localhost:8084/api/V1/friends";

class ConnectionService {
  getConnection(userId, friendId) {
    const data = { userId, friendId };
    return axios.put(CONNECTION_API_BASE_URL, data);
  }
}

export default new ConnectionService();
