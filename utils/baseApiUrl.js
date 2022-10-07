const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://residenceouleta-4cbeuxm30-tibojkt.vercel.app"
    : "http://localhost:1337";

export default baseApiUrl;
