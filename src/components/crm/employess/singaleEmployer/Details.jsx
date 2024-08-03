const Details = () => {
  return (
    <div className="card">
        <div className="image">
            <img src="/images/150-1-PeopleImages 6.svg" alt="ahmed" />
        </div>
        <div className="emplo_details">
                <div className="title_top">
                  <h5>معلومات الموظف</h5>
                </div>
                <div className="employees_content">
                  <div><p>اسم الموظف</p> <span>محمد علي</span></div>
                  <div><p>الوظيفة</p> <span>مهندس فحص مباني</span></div>
                  <div><p>البريد الإلكتروني</p> <span>Info@example.com</span></div>
                  <div><p>رقم الهاتف</p> <span>0000 000 000</span></div>
                </div>
              </div>
    </div>
  )
}

export default Details
