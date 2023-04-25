import axios from "axios";
import config from "../config/config";

export const login = (email, password) => {

  return async () => {
    await axios.post(config.authUrl + '/api/register', { email, password }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
};
