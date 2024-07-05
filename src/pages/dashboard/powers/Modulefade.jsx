
const Modulefade = () => {
  return (
    <div
              className="modal fade"
              id="staticBackdrop"
              data-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form action="">
                    <div className="modal-header">
                      <h5 className="modal-title" id="staticBackdropLabel">
                        اضافه صلاحيه
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>

               

                    <div className="project_price">
                    <label htmlFor="exampleFormControlSelect10">  اسم الصلاحيه*</label>
                    <input type="text" name="estate-measure" id="exampleFormControlSelect10" />
                    </div>
                    <div className="project_price">
                        <label htmlFor="exampleFormControlSelect10"> تفاصيل الصلاحيه*</label>
                        <input type="text" name="estate-measure" id="exampleFormControlSelect10" />
                    </div>
                
                
           
                     
                  
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        الغاء
                      </button>
                      <button type="button" className="btn btn-primary">
                        حفظ
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
  )
}

export default Modulefade
