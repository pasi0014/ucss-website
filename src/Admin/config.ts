const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "http://ucss-api.ucssottawa.online:3005"
    : "http://localhost:3005";

export default API_BASE_URL;
