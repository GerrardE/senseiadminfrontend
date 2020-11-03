import axios from "axios";

axios.defaults.baseURL = "https://us-central1-sensei-edfdf.cloudfunctions.net/app/api/v1/";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const getResource = async (path) => {
  try{
    const response = await axios.get(path);
    return response.data.payload;
  } catch (error) {
    throw(error.response.data);
  }
};

const postResource = (path, body) => {
  try{
    const response = axios.post(path, body);
    return response;
  } catch (error) {
    throw(error.response.data);
  }
};

const putResource = (path, body) => {
  try{
    const response = axios.put(path, body);
    return response;
  } catch (error) {
    throw(error.response.data);
  }
};

const deleteResource = (path) => {
  try{
    const response = axios.delete(path);
    return response;
  } catch (error) {
    throw(error.response.data);
  }
};

export default {
  getResource,
  postResource,
  putResource,
  deleteResource,
};
