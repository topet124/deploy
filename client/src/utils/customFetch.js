import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://deploy-vqtn.vercel.app/",
});

const JobCustomFetch = axios.create({
  baseURL: "https://jobicy.com/api/v2",
});

export default customFetch;
export { JobCustomFetch };
