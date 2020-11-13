import React from 'react';
import './my-teams.scss';

function MyTeams() {
  const columnsValues: Array<string> = ["B_Value", "C_Value", "A_Value"];
  let columns: Array<JSX.Element> = [];
  columnsValues.sort((a,b) => 0 - (a > b ? -1 : 1));
  columnsValues.forEach(column => {
    columns.push(<span className="td">{column}</span>);
  });
  return(
    <>
      <div className="my-teams">
        <div className="title">
          <span>My Teams</span>
        </div>

        <div className="table">
          <div className="thead">
            <div className="tr">
              {columns}
            </div>
          </div>
          <div className="tbody">
            <div className="tr">
              <span className="td">Name</span>
              <span className="td">description</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default MyTeams;