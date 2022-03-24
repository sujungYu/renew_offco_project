import axios from 'axios';

const config = {
  baseUrl: 'http://localhost:8000',
};

function signUp(payload) {
  return axios.post(`${config.baseUrl}/signup`, payload);
}
function newRoom(payload) {
  return axios.post(`${config.baseUrl}/rooms`, payload);
}
function addTodo(payload) {
  return axios.post(`${config.baseUrl}/todolist`, {
    title: payload.title,
    createdAt: payload.createdAt,
    calendarId: payload.calendarId,
  });
}
function inviteToken(payload) {
  return axios.patch(`${config.baseUrl}/rooms/${payload.id}`, {
    inviteUrl: payload.token,
  });
}
export { signUp, newRoom, addTodo, inviteToken };
