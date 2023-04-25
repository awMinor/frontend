import hosts from './hosts';

const config = {
  authUrl: hosts[process.env.NODE_ENV].authUrl
};

export default config;
