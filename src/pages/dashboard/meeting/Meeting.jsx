/* eslint-disable no-unused-vars */
import { MdMeetingRoom } from "react-icons/md";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import allLocales from '@fullcalendar/core/locales-all'
import {SingleBraedcrumb} from "../../../components/layout"
import "./Calendar.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {CoustomeLink} from "../../../components/common";

const Meeting = () => {
    const navigate = useNavigate()
    // const admin = false == check if the usser adimn to display the meeting details
    const [meetingData, setMeeting] = useState([
        {
          id: "01",
          title: 'إجتماع بخصوص مشروع الرايه الساعه 8pm',
          date: '2024-07-11',
          time: new Date('2024-07-11T20:00:00').toLocaleTimeString('ar-SA', { hour: 'numeric', minute: 'numeric' }),

          desc: "تفاصيل المشروع انه تم الاتفاق على ان يكون السعر قابل للتفاوض وليس هناك اى دليل الى اقل من ذللك"
        },
        {
          id: "09",
          title: 'إجتماع بخصوص مشروع الرايه الساعه 8pm',
          date: '2024-07-11',
          time: new Date('2024-07-11T20:00:00').toLocaleTimeString('ar-SA', { hour: 'numeric', minute: 'numeric' }),

          desc: "تفاصيل المشروع انه تم الاتفاق على ان يكون السعر قابل للتفاوض وليس هناك اى دليل الى اقل من ذللك"
        },
        {
          id: "04",
          title: '  الساعه 6 ليلاإجتماع بخصوص الموظفين',
          date: '2024-07-15',
          time: '6:00 PM',
          desc: "تفاصيل المشروع انه تم الاتفاق على ان يكون السعر قابل للتفاوض وليس هناك اى دليل الى اقل من ذللك"
        },
        {
          id: "06",
          title: '  الساعه 6 ليلاإجتماع بخصوص الاداره',
          date: '2024-07-12',
          time: '6:00 PM',
          desc: "تفاصيل المشروع انه تم الاتفاق على ان يكون السعر قابل للتفاوض وليس هناك اى دليل الى اقل من ذللك"
        },
      ]);
      // handel each meeting click 
    const handeleventclik = (event) => {
        const targetevent = event.event.id
        return  navigate(`/meeting/${targetevent}`)
     
          }
  
  return (
    <>
    <div className="calendar_section_details">
    <div className="container">
    <div className="calendar_top">
        <div className="m-b-c">
          <SingleBraedcrumb icon={<MdMeetingRoom />} title="الإجتماعات" />
        </div>
        <div className="btn-container">
        <CoustomeLink url={"/addMeeting"} text={"إضافه إجتماع"} />
        <CoustomeLink url={"/all-meeting"} text={" جميع الإجتماعات"} />
        </div>
      </div>
      <div className="calendar_box">
              <Fullcalendar
    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin ]}
    initialView={"dayGridMonth" } 
    headerToolbar={{
      start: "today prev,next", // will normally be on the left. if RTL, will be on the right
      center: "title",
      end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
    }}
    height={"80vh"}
    events={meetingData}
      locales={allLocales}
       locale={'ar'}
       eventClassNames= "my-event" 
       eventClick={handeleventclik}
  
 

       
  />
      </div>
    </div>
</div>
</>
  )
}

export default Meeting