import axios from "axios";

// API
const PROTOCAL = "http";
const IP = process.env.REACT_APP_HOST_IP;
const API_PORT = process.env.REACT_APP_API_PORT;
const API_ROOT = process.env.REACT_APP_API_ROOT;
const API_TYPE = "menu";

const API = `${PROTOCAL}://${IP}:${API_PORT}/${API_ROOT}/${API_TYPE}/`;

const getMenu = async () => {
  const API_TYPE = "menus";
  const API = `${PROTOCAL}://${IP}:${API_PORT}/${API_ROOT}/${API_TYPE}/`;
  try {
    return await axios.get(API);
  } catch (error) {
    return error;
  }
};

const postMenu = async (data) => {
  try {
    return await axios.post(API, data);
  } catch (error) {
    return error;
  }
};

const putMenu = async (uuid, data) => {
  try {
    return await axios.put(API + String(uuid) + "/", data);
  } catch (error) {
    return error;
  }
};

const deleteMenu = async (uuid) => {
  try {
    return await axios.delete(API + String(uuid));
  } catch (error) {
    return error;
  }
};

export { getMenu, postMenu, putMenu, deleteMenu };
