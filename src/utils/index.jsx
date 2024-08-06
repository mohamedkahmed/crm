/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export const SelectOPtions = ({options ,name , id , label , defaultValue}) =>{

return (
    <div className="main_group">
    <label htmlFor={id}>  {label}*</label>
    <select className="form_control" id={id}name={name} defaultValue={defaultValue}>
      {
        options.map((iteam) =>  <option value={iteam} key={iteam}>{iteam}</option>)
      }
    </select>
  </div>
)
}