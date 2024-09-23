'use client'

import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import { useEffect, useState } from 'react';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const ScheduleCalendar: React.FC = () => {
  const [scheduleEvents, setScheduleEvents] = useState([]);

  useEffect(() => {
    // Fetch jobs from API
    // fetch('/api/jobs')
    //   .then(response => response.json())
    //   .then(data => setScheduleEvents(data));
  }, []);

  const handleEventSelect = (event) => {
    // Handle selecting an event for editing
    console.log("Selected event:", event);
  };

  const handleSlotSelect = (slotInfo) => {
    // Create a new event (job)
    const newEvent = {
      title: "New Job",
      start: slotInfo.start,
      end: slotInfo.end,
      allDay: slotInfo.action === 'select',
    };
    setScheduleEvents([...scheduleEvents, newEvent]);

    // Optionally send the new event to the server
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={scheduleEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView="week"
        views={["day","week","month"]}
        selectable
        onSelectEvent={handleEventSelect}
        onSelectSlot={handleSlotSelect}
        style={{ height: 600 }}
      />
    </div>
  );
};

export default ScheduleCalendar;
