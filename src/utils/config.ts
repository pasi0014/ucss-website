const API_BASE_URL =
    process.env.NODE_ENV === "production"
        ? "http://31.220.59.154:3005"
        : "http://localhost:3005";

export default API_BASE_URL;
