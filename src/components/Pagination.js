const Pagination = ({ data, params, setParams, type }) => {
  const handlePagination = (page) => {
    const newParams = Object.assign({ ...params }, { currentPage: page });
    setParams(newParams);
    localStorage.setItem(`last-search`, JSON.stringify({ [type]: newParams }));
  };
  return (
    <div className="Pagination noselect">
      {params.currentPage > 3 ? (
        <div className="pagination-page" onClick={() => handlePagination(1)}>
          1{params.currentPage > 4 && "..."}
        </div>
      ) : (
        <div></div>
      )}
      {params.currentPage > 2 ? (
        <div
          className="pagination-page"
          onClick={() => handlePagination(params.currentPage - 2)}
        >
          {params.currentPage - 2}
        </div>
      ) : (
        <div></div>
      )}
      {params.currentPage !== 1 ? (
        <div
          className="pagination-page"
          onClick={() => handlePagination(params.currentPage - 1)}
        >
          {params.currentPage - 1}
        </div>
      ) : (
        <div></div>
      )}
      <div className="pagination-page current-page">{params.currentPage}</div>
      {params.currentPage !==
      Math.round(
        Math.max(data.count, params.resultsPerPage) / params.resultsPerPage
      ) ? (
        <div
          className="pagination-page"
          onClick={() => handlePagination(params.currentPage + 1)}
        >
          {params.currentPage + 1}
        </div>
      ) : (
        <div></div>
      )}
      {params.currentPage <
      Math.round(
        Math.max(data.count, params.resultsPerPage) / params.resultsPerPage
      ) -
        1 ? (
        <div
          className="pagination-page"
          onClick={() => handlePagination(params.currentPage + 2)}
        >
          {params.currentPage + 2}
        </div>
      ) : (
        <div></div>
      )}
      {params.currentPage <
      Math.round(
        Math.max(data.count, params.resultsPerPage) / params.resultsPerPage
      ) -
        2 ? (
        <div
          className="pagination-page"
          onClick={() =>
            handlePagination(
              Math.round(
                Math.max(data.count, params.resultsPerPage) /
                  params.resultsPerPage
              )
            )
          }
        >
          {params.currentPage <
            Math.round(
              Math.max(data.count, params.resultsPerPage) /
                params.resultsPerPage
            ) -
              3 && "..."}
          {Math.round(
            Math.max(data.count, params.resultsPerPage) / params.resultsPerPage
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Pagination;
