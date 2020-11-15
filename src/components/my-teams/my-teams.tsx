import React from 'react';
import './my-teams.scss';
import MyTeamsTable from'../my-teams-table/my-teams-table';
import { MdAdd } from "react-icons/md";

const data = [
  { name: "Barcelona", description: "Barcelona Squad" },
  { name: "Real", description: "Real Squad" }
];

const columns = [
  {
    Header: "Name",
    columns: [
      {
        accessor: "name",
        sortType: "basic"
      }
    ]
  },
  {
    Header: "Description",
    columns: [
      {
        accessor: "description"
      }
    ]
  }
];

function MyTeams() {
  return(
    <>
      <div className="my-teams">
        <div className="title">
          <span>My teams</span>
          <button className="add-team">
            <MdAdd />
          </button>
        </div>
        <div className="table-container">
          <MyTeamsTable columns={columns} data={data}/>
        </div>
      </div>
    </>
  );
}

export default MyTeams;