import "../assets/css/modal.css";

const Modal = ({ isOpen, onClose, rowData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>Job details</h2>
        <div className="job-details">
          <p>Job Geo: {rowData.jobGeo}</p>
          <p>
            Salary Currency:{" "}
            {rowData.salaryCurrency ? rowData.salaryCurrency : "USD"}
          </p>
          <p>Job Industry: {rowData.jobIndustry}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
