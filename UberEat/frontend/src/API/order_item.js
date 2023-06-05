import axios from "axios";

// API
const PROTOCAL = "http";
const IP = process.env.REACT_APP_HOST_IP;
const API_PORT = process.env.REACT_APP_API_PORT;
const API_ROOT = process.env.REACT_APP_API_ROOT;
const API_TYPE = "order_item";

const API = `${PROTOCAL}://${IP}:${API_PORT}/${API_ROOT}/${API_TYPE}/`;

const getOrderItem = async () => {
  const API_TYPE = "order_items";
  const API = `${PROTOCAL}://${IP}:${API_PORT}/${API_ROOT}/${API_TYPE}/`;
  try {
    return await axios.get(API);
  } catch (error) {
    return error;
  }
};

const postOrderItem = async (data) => {
  try {
    return await axios.post(API, data);
  } catch (error) {
    return error;
  }
};

const putOrderItem = async (id, data) => {
  try {
    return await axios.put(API + String(id) + "/", data);
  } catch (error) {
    return error;
  }
};

const deleteOrderItem = async (id) => {
  try {
    return await axios.delete(API + String(id));
  } catch (error) {
    return error;
  }
};

export { getOrderItem, postOrderItem, putOrderItem, deleteOrderItem };
