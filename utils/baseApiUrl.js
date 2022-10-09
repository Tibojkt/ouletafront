const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://ouleta.herokuapp.com"
    : "http://localhost:1337";

export default baseApiUrl;
