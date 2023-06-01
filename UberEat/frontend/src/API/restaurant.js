import axios from "axios";

// API
const PROTOCAL = "http";
const IP = process.env.REACT_APP_HOST_IP;
const API_PORT = process.env.REACT_APP_API_PORT;
const API_ROOT = process.env.REACT_APP_API_ROOT;
const API_TYPE = "restaurant";

const API = `${PROTOCAL}://${IP}:${API_PORT}/${API_ROOT}/${API_TYPE}/`;

const getRestauarnt = async () => {
  const API_TYPE = "restaurants";
  const API = `${PROTOCAL}://${IP}:${API_PORT}/${API_ROOT}/${API_TYPE}/`;
  try {
    return await axios.get(API);
  } catch (error) {
    return error;
  }
};

const postRestauarnt = async (data) => {
  try {
    return await axios.post(API, data);
  } catch (error) {
    return error;
  }
};

const putRestauarnt = async (id, data) => {
  try {
    return await axios.put(API + String(id) + "/", data);
  } catch (error) {
    return error;
  }
};

const deleteRestauarnt = async (id) => {
  try {
    return await axios.delete(API + String(id));
  } catch (error) {
    return error;
  }
};

export { getRestauarnt, postRestauarnt, putRestauarnt, deleteRestauarnt };
