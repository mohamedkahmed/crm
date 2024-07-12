import { FaCalendarAlt } from "react-icons/fa";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from '@fullcalendar/core/locales-all'
import SingleBraedcrumb from "../../../components/singlebraedcrumb/SingleBraedcrumb"
import "./Calendar.scss";
const Calendar = () => {
 

  return (
    <>
    <div className="calendar_section_details">
        <div className="container">
        <div className="calendar_top">
            <div className="m-b-c">
              <SingleBraedcrumb icon={<FaCalendarAlt />} title="التقويم" />
            </div>
          </div>
          <div className="calendar_box">
                  <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }}
        height={"90vh"}
        events={[
            { id:"01" ,title: 'مشروع رقم hgklop', date: '2024-07-11'  , desc:"تفاصيل المشروع انه تم الاتفاق على ان يكون السعر قابل للتفاوض وليس هناك اى دليل الى اقل من ذللك"},
            {id:"02", title: 'مشروع رقم 2', date: '2024-06-04'  , desc:"تفاصيل المشروع انه تم الاتفاق على ان يكون السعر قابل للتفاوض وليس هناك اى دليل الى اقل من ذللك"},
            {id:"03" , title: 'مشروع رقم 3', date: '2024-06-02' , desc:"تفاصيل المشروع انه تم الاتفاق على ان يكون السعر قابل للتفاوض وليس هناك اى دليل الى اقل من ذللك" }
          ]}
          locales={allLocales}
           locale={'ar'}
         
      />
          </div>
        </div>
    </div>
    </>
  )
}

export default Calendar