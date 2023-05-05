const EngmtList = ({ engmtList, engmtSelected, setEngmtSelected }) => {
  const handleSelected = (index) => {
    setEngmtSelected(index);
  };

  return (
    <div className="engmtlist-container">
      <div className="header">
        <h2>Engagement</h2>
      </div>
      <div className="engmtlist">
        {engmtList.length > 0 ? (
          <>
            <div className="sub-header">
              <h3>- Whole platform</h3>
            </div>
            {engmtList.map((engmt, index) => {
              const { name } = engmt;
              return (
                <>
                  {index === 1 && (
                    <div className="sub-header">
                     <h3>- Individual</h3>
                    </div>
                  )}
                  <div
                    className={`engmt ${
                      index === engmtSelected ? 'selected' : ''
                    }`}
                    key={name}
                    id={index}
                    onClick={() => handleSelected(index)}
                  >
                    <h3>{name}</h3>
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <div className="no-engmt">No restaurants</div>
        )}
      </div>
    </div>
  );
};
export default EngmtList;
