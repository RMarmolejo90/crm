// TypeScript interface for events based on GORM struct and react-big-calendar requirements
interface Event {
  id: number;  // GORM Model ID
  createdAt: Date;  // GORM Model CreatedAt timestamp
  updatedAt: Date;  // GORM Model UpdatedAt timestamp
  deletedAt?: Date | null;  // GORM Model DeletedAt timestamp (optional)

  scheduleID: number;  // Foreign key to Schedule
  schedule?: Schedule;  // Associated schedule (optional)

  title: string;  // Title of the event (for react-big-calendar)
  description?: string;  // Detailed event description
  eventType: string;  // e.g., "PTO", "Training", "Meeting"

  start: Date;  // For react-big-calendar: When the event starts
  end: Date;  // For react-big-calendar: When the event ends
  allDay: boolean;  // For react-big-calendar: Indicates if the event spans the entire day

  startTime: Date;  // For GORM: Actual start time
  endTime: Date;  // For GORM: Actual end time
  isAllDay: boolean;  // Indicates if the event is an all-day event
  recurring: boolean;  // Indicates if the event is recurring
  recurrenceRule?: string;  // Recurrence rule (optional), e.g., "FREQ=WEEKLY;BYDAY=MO,WE,FR"
}
