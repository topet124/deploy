import "../assets/css/JobsContainer.css";
import { useAllJobsContext } from "../pages/AllJobs";
import { DynamicDataTable } from "@code-based/react-dynamic-data-table";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Modal, PerPage } from "../components";
import { toast } from "react-toastify";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  const { user } = useOutletContext();
  const { role } = user;

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const processedData = jobs.map((job) => ({
      ...job,
      jobType: Array.isArray(job.jobType) ? job.jobType[0] : job.jobType,
      jobIndustry: Array.isArray(job.jobIndustry)
        ? job.jobIndustry[0].replace(/&amp;/g, "&")
        : job.jobIndustry,
    }));
    return processedData.slice(startIndex, endIndex);
  };
  const changePage = (page) => {
    setCurrentPage(page);
  };
  const changePerPage = (newPerPage) => {
    setPerPage(newPerPage);
    setCurrentPage(1);
  };

  return (
    <div>
      <DynamicDataTable
        totalRows={jobs.length}
        rows={getPaginatedData()}
        onClick={(event, row) => {
          if (role === "paid") {
            setIsModalOpen(true);
            setSelectedRowData(row);
          } else {
            toast.warning("Feature Not available for free users");
          }
        }}
        fieldsToExclude={[
          "email",
          "id",
          "url",
          "jobSlug",
          "companyLogo",
          "jobIndustry",
          "jobGeo",
          "jobExcerpt",
          "jobDescription",
          "pubDate",
          "annualSalaryMin",
          "annualSalaryMax",
          "salaryCurrency",
        ]}
        totalPages={Math.ceil(jobs.length / perPage)}
        currentPage={currentPage}
        changePage={changePage}
        perPageOptions={[10, 20, 50]}
        changePerPage={role === "paid" ? changePerPage : undefined}
        perPage={perPage}
        buttons={[]}
        fieldMap={{
          jobTitle: "Job Title",
          companyName: "Company Name",
          jobType: "Job Type",
          jobLevel: "Job Level",
        }}
        perPageRenderer={(props) => <PerPage {...props} />}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        rowData={selectedRowData}
      />
    </div>
  );
};

export default JobsContainer;
