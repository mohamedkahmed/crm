/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component";
import "../tableStyle/TableStyle.scss";
const ExpensesTable = ({data, columns}) => {
    return (
      <>
        <div className="main_table_styles">
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
  
  export default ExpensesTable
