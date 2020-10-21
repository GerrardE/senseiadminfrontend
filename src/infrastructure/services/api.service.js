import axios from "axios";
import errorHandler from "./error.service";

// axios.defaults.baseURL = "http://xxx";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const getResource = (path) => {
  try{
    const response = axios.get(`${path}`);
    return response.data.data;
  } catch (error) {
    errorHandler(error);
  }
};

const postResource = (path, body) => {
  try{
    const response = axios.post(`${path}`, body);
    return response.data.data;
  } catch (error) {
    errorHandler(error);
  }
};

const putResource = (path, body) => {
  try{
    const response = axios.put(`${path}`, body);
    return response.data.data;
  } catch (error) {
    errorHandler(error);
  }
};

const deleteResource = (path) => {
  try{
    const response = axios.delete(`${path}`);
    return response.data.data;
  } catch (error) {
    errorHandler(error);
  }
};

export default {
  getResource,
  postResource,
  putResource,
  deleteResource,
};
