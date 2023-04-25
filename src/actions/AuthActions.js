import axios from "axios";
import config from "../config/config";

export const login = (email, password) => {



  return async (dispatch) => {
    try {
      const response = await axios.post(config.authUrl + '/api/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = {
        email: response.data.email,
        id: response.data.id,
        token: response.data.token,
      };
      dispatch({
        type: 'LOGIN',
        payload: data,
      });
      return data;
    } catch (error) {
      console.error(error);
      // Handle error, e.g. dispatch an action with an error message
    }
  };
};
