import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { JobCustomFetch } from "../utils/customFetch";
import { JobsContainer } from "../components";

export const loader = async () => {
  try {
    const { data } = await JobCustomFetch.get("/remote-jobs");
    return {
      data,
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobsContext = createContext();
const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <>
      <AllJobsContext.Provider value={{ data }}>
        <JobsContainer />
      </AllJobsContext.Provider>
    </>
  );
};
export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
