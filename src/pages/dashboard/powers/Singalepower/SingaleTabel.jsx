/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import "../../tableStyle/TableStyle.scss";

const SingaleTabel = ({ columns, data }) => {
  return (
    <>
      <div className="main_table_styles" style={{marginTop:"2rem"}}>
        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </>
  )
}
export default SingaleTabel

