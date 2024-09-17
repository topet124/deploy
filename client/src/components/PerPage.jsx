const PerPage = ({ totalRows, value, onChange, options }) => {
  return (
    <div className="per-page-control">
      <span>Rows per Page: </span>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span> of {totalRows} rows</span>
    </div>
  );
};

export default PerPage;
