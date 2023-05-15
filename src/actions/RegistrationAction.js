import axios from "axios";
import config from "../config/config";

export const register = (email, password, name) => {

  return async (dispatch) => {

    try {
      const response = await axios.post(config.authUrl + '/register', { email, password, name }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = {
        email: email,
        id: response.data.id,
        token: response.data.token,
        name: name,
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
