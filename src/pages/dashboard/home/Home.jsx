import { GiStabbedNote } from "react-icons/gi";
import { PiBuildingsFill } from "react-icons/pi";
import { BiSolidReport } from "react-icons/bi";
import "./Home.scss";
const Home = () => {
  return (
    
  <div className="home">
      <div className="container">
          <div className="row">
                <div className="col-5"> 
                    <div className="right">
                          <div className="parent-section">
                                <div className="mission-details">
                                  <div className="mission">
                                    <span>إجمالى المشاريع</span>
                                    <span className="icon project"><PiBuildingsFill /></span>
                                  
                                  </div>
                                  <h3>4</h3>
                                  <div className="mission">
                                    <span className="show-more"> عرض المزيد</span>
                                  
                                  
                                </div>
                              </div>
                            <div className="mission-details">
                              <div className="mission">
                                <span>إجمالى التقارير</span>
                                <span className="icon"><BiSolidReport /></span>
                              
                              </div>
                              <h3>4</h3>
                              <div className="mission">
                                <span className="show-more"> عرض المزيد</span>
                            
                              
                            </div>
                          </div>
                          </div>
                          <div className="parent-section">
                          <div className="mission-details">
                            <div className="mission">
                              <span>إجمالى الموظفين</span>
                              <span className="icon project"><PiBuildingsFill /></span>
                            
                            </div>
                            <h3>43</h3>
                            <div className="mission">
                              <span className="show-more"> عرض المزيد</span>
                            
                            
                          </div>
                        </div>
                      <div className="mission-details">
                        <div className="mission">
                          <span>إجمالى العملاء</span>
                          <span className="icon"><BiSolidReport /></span>
                        
                        </div>
                        <h3>4</h3>
                        <div className="mission">
                          <span className="show-more"> عرض المزيد</span>
                       
                        
                      </div>
                    </div>
                          </div>
                          <div className="parent-section">
                          <div className="mission-details">
                            <div className="mission">
                              <span>إجمالى الفواتير</span>
                              <span className="icon project"><PiBuildingsFill /></span>
                            
                            </div>
                            <h3>10</h3>
                            <div className="mission">
                              <span className="show-more"> عرض المزيد</span>
                            
                            
                          </div>
                        </div>
                      <div className="mission-details">
                        <div className="mission">
                          <span>إجمالى المصروفات</span>
                          <span className="icon"><BiSolidReport /></span>
                        
                        </div>
                        <h3>4</h3>
                        <div className="mission">
                          <span className="show-more"> عرض المزيد</span>
                       
                        
                      </div>
                    </div>
                          </div>
                    </div>
                </div>
                <div className="col-4"> 
                  <div className="center">
                      center
                </div>
                </div>
              <div className="col-3"> 
              <div className="left">
                    <div className="mission-details">
                          <div className="mission">
                            <span>إجمالى المهام</span>
                            <span className="misson-numb">100%</span>
                          
                          </div>
                          <h3>4</h3>
                          <div className="mission">
                            <span className="show-more"> عرض المزيد</span>
                            <span className="icon"><GiStabbedNote /></span>
                          
                        </div>
                      </div>
                    <div className="mission-details">
                      <div className="mission">
                        <span> مهام منجزة</span>
                        <span className="misson-numb">25%</span>
                      
                      </div>
                      <h3>1</h3>
                      <div className="mission">
                        <span className="show-more"> عرض المزيد</span>
                        <span className="icon correct"><GiStabbedNote /></span>
                      
                      </div>
                  </div>
                  <div className="mission-details">
                      <div className="mission">
                        <span>  مهام غير منجزة</span>
                        <span className="misson-numb danger-numb">75%</span>
                      
                      </div>
                      <h3>3</h3>
                      <div className="mission">
                        <span className="show-more"> عرض المزيد</span>
                        <span className="icon danger"><GiStabbedNote /></span>
                      
                      </div>
                  </div>
              </div>
              </div>
          </div>
            <div className="event-today">
                <div className="row">
                      <div className="col-6">
                        <div className="mission-toady">
                            <span>مشاريع مضافه اليوم</span>
                            <div className="content">
                                  ليس هناك مشاريه مضافه اليوم 
                            </div>
                        </div>
                      </div>
                      <div className="col-6">
                      <div className="project-toady">
                            <span> مهام اليوم </span> 
                            <div className="content">
                                  ليس هناك مشاريه مضافه اليوم 
                            </div>
                      </div>
                    </div>
                </div>
            </div>
      </div>
        
     
    </div>
   
  )
}

export default Home