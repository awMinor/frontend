import axios from "axios";
import config from "../config/config";

export const login = (email, password, rememberme) => {

  return async (dispatch) => {
    try {
      const response = await axios.post(config.authUrl + '/login', { email, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = {
        email: response.data.email,
        id: response.data.id,
        token: response.data.token,
        name: response.data.name,
      };
      dispatch({
        type: 'LOGIN',
        payload: data,
      });

      if (rememberme) {
        localStorage.setItem('user', JSON.stringify(data));
      }

      return data;
    } catch (error) {
      console.error(error);
      // Handle error, e.g. dispatch an action with an error message
    }
  };
};
