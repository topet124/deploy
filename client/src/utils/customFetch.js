import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api",
});

const JobCustomFetch = axios.create({
  baseURL: "https://jobicy.com/api/v2",
});

export default customFetch;
export { JobCustomFetch };
