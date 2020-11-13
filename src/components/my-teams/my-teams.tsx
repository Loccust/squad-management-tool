import React from 'react';
import './my-teams.scss';
import MUIDataTable from "mui-datatables";

function MyTeams() {
  const columns = [
    {
     name: "name",
     label: "Name",
     options: {
      sort: true,
     }
    },
    {
     name: "company",
     label: "Company",
     options: {
      sort: true,
     }
    },
   ];
   
   const data = [
    { name: "Joe James", company: "Test Corp" },
    { name: "John Walsh", company: "Test Corp" },
    { name: "Bob Herm", company: "Test Corp" },
    { name: "James Houston", company: "Test Corp" },
   ];
   
   const options = {
    search: false,
    showTitle: false,
    toolbar: false,
    filter: false,
    download: false,
    print: false,
    viewColumns: false,
    selection: false,
    paging: true,
    selectableRows: 'none',
        onRowClick: (rowData) => {
            console.log("RowClicked->", rowData);
        },
        responsive: "stacked",
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: false,
        },
   };
  return(
    <>
      <div className="my-teams">
        <div className="title">
          <span>My Teams</span>
        </div>
        <MUIDataTable
          data={data}
          columns={columns}
          options={options}
        />
      </div>
    </>
  );
}

export default MyTeams;