/* eslint-disable object-shorthand */
/* eslint-disable class-methods-use-this */
import axios from "axios";

const CHAT_API_BASE_URL = "http://localhost:8084/api/V1/chats";

class ChatService {
  getAllChat() {
    return axios.get(CHAT_API_BASE_URL);
  }

  getChatBySenderId(userId) {
    return axios.get(`${CHAT_API_BASE_URL}/${userId}`);
  }

  createChat(senderId, receiverId, message) {
    const data = { senderId, receiverId, message };
    return axios.post(CHAT_API_BASE_URL, data);
  }
}

export default new ChatService();
