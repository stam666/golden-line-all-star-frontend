const EngmtList = ({ engmtList, engmtSelected, setEngmtSelected }) => {

  const handleSelected = (event) => {
    const {id} = event.currentTarget;
    setEngmtSelected(id);
  };

  return (
    <div className="engmtlist-container">
      <div className="header">
        <h2>Engagement</h2>
      </div>
      <div className="engmtlist">
        {engmtList.length > 0 ? (
          <>
            {engmtList.map((engmt, index) => {
              const { _id, name } = engmt;
              return (
                <div
                  className={`chat ${name === engmtSelected ? 'selected' : ''}`}
                  key={_id}
                  id={_id}
                  onClick={handleSelected}
                >
                  <h3>{name}</h3>
                </div>
              );
            })}
          </>
        ) : (
          <div className="no-engmt">No Engagement</div>
        )}
        <div
          className={`engmt`}
          id="test"
          onClick={handleSelected}
        >
          <h3>{'Aroi'}</h3>
        </div>
      </div>
    </div>
  );
};
export default EngmtList;
