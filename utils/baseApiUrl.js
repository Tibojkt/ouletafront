const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "residenceouleta-o9wsivlgf-tibojkt.vercel.app"
    : "http://localhost:1337";

export default baseApiUrl;
