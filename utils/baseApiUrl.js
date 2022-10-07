const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "http://localhost:1437"
    : "http://localhost:1437";

export default baseApiUrl;
