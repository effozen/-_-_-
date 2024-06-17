import axios from "axios";

const requestGet = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error during GET request:', error);
    throw error;
  }
};

export { requestGet };
