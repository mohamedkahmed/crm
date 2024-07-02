/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import "../tableStyle/TableStyle.scss";

const ReportTable = ({columns , data}) => {
  return (
    <div>
           <>
      <div className="main_table_styles">
        <DataTable
          columns={columns}
          data={data}
          selectableRows
          fixedHeader
          pagination
        ></DataTable>
      </div>
    </>
    </div>
  )
}

export default ReportTable