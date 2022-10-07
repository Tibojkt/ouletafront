const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "residenceouleta.vercel.app"
    : "http://localhost:137";

export default baseApiUrl;
