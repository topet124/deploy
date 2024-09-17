import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://deploy-lemon-gamma.vercel.app/api/v1",
  withCredentials: true
});

const JobCustomFetch = axios.create({
  baseURL: "https://jobicy.com/api/v2",
});

export default customFetch;
export { JobCustomFetch };
