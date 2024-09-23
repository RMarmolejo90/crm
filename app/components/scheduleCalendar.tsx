'use client'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { useState } from 'react'

const locales = {
  'en-US': enUS,
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: 'Big Meeting',
    start: new Date(),
    end: new Date(),
    allDay: true,
  },
  {
    title: 'Second Meeting',
    start: new Date(),
    end: new Date(),
    allDay: true,
  }
]

const ScheduleCalendar: React.FC = () => {

  const [scheduleEvents, setScheduleEvents] = useState(events);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={scheduleEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>

  )
}
export default ScheduleCalendar
