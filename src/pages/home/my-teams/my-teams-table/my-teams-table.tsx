import React from "react";
import { useTable, useSortBy } from "react-table";
import { FaSort } from "react-icons/fa";
const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  },
  useSortBy
  );

  return (
    <table {...getTableProps()} className="table">
      <thead className="thead">
        {headerGroups.map((headerGroup, index) => {
        console.log(headerGroups);
          return(
          <tr className="tr" key={index} {...headerGroup.getHeaderGroupProps}>
            {headerGroup.headers.map((column, index) => {
              console.log(column);
              return (
                <td className="td" key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <FaSort/>
                </td>
              )
          })}
          </tr>
        )})}
      </thead>
      <tbody className="tbody" {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr className="tr" {...row.getRowProps()}>
              {row.cells.map(cell => {
                  return <td className="td" key={index} {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
interface Props{
  columns: Array<Object>;
  data: Array<Object>;
}
 const MyTeamsTable: React.FC<Props> = ({columns, data}) => {
  return (
    <>
      <Table columns={columns} data={data} />
    </>
  );
};
export default MyTeamsTable;