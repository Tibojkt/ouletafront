const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://residenceouleta.vercel.app/"
    : "http://localhost:137";

export default baseApiUrl;
