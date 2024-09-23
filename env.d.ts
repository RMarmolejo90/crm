
// Customer.ts
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: 'new' | 'active' | 'blacklist' | 'gold';
  hourlyRateId: number;
  hourlyRate: HourlyRate;
  locations: Location[];
  jobs: Job[];
  contactMethods: ContactMethod[];
}

// ContactMethod.ts
export interface ContactMethod {
  id: number;
  customerId: number;
  customer: Customer;
  methodType: string;  // e.g., "Phone", "Email", "Fax"
  methodValue: string; // e.g., phone number, email address
  isPreferred: boolean;
}

// Location.ts
export interface Location {
  id: number;
  customerId: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  equipment: Equipment[];
  jobs: Job[];
  tags: Tag[];
}

// Technician.ts
export interface Technician {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hireDate: Date;
  status: string;
  jobs: Job[];
  schedules: Schedule[];
}

// Job.ts
export interface Job {
  id: number;
  customerId: number;
  locationId: number;
  technicianId: number;
  scheduleId: number;
  scheduledDate: Date;
  completionDate?: Date;
  status: 'scheduled' | 'working' | 'paused' | 'delayed' | 'rescheduled' | 'cancelled' | 'needs quote' | 'quote sent' | 'quote approved' | 'awaiting parts' | 'ready to schedule' | 'requires return' | 'completed';
  notes?: string;
  materialsCost: number;
  laborCost: number;
  statusHistory: JobStatusHistory[];
  services: Service[];
  tags: Tag[];
  invoices: Invoice[];
  quotes: Quote[];
}

// Schedule.ts
export interface Schedule {
  id: number;
  technicianId: number;
  technician: Technician;
  jobs: Job[];
  events: Event[];
  date: Date;
  startTime: Date;
  endTime?: Date;
}

// Event.ts
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


// Service.ts
export interface Service {
  id: number;
  name: string;
  description?: string;
  cost: number;
  jobs: Job[];
}

// JobStatusHistory.ts
export interface JobStatusHistory {
  id: number;
  jobId: number;
  status: string;
  changedAt: Date;
}

// Equipment.ts
export interface Equipment {
  id: number;
  locationId: number;
  brand: string;
  type: string;
  installDate: Date;
  installedByUs: boolean;
  modelNumber: string;
  serial?: string;
  name: string;
  location?: string;
  notes: Note[];
  consumables: Consumables[];
}

// Consumables.ts
export interface Consumables {
  id: number;
  equipmentId: number;
  type: string;
  size: string;
  quantity: number;
}

// Invoice.ts
export interface Invoice {
  id: number;
  jobId: number;
  invoiceDate: Date;
  totalAmount: number;
  paymentStatus: 'paid' | 'unpaid' | 'refunded';
  technicianNotes?: string;
  officeNotes?: string;
  payments: Payment[];
}

// Payment.ts
export interface Payment {
  id: number;
  invoiceId: number;
  paymentDate: Date;
  amount: number;
  paymentMethod: string;
}

// Quote.ts
export interface Quote {
  id: number;
  jobId: number;
  name: string;
  quoteDate: Date;
  price: number;
  description: string;
}

// Stock.ts
export interface Stock {
  id: number;
  technicianId: number;
  name: string;
  partNumber: string;
  description?: string;
  cost: number;
  quantity: number;
  jobs: Job[];
  services: Service[];
}

// Tag.ts
export interface Tag {
  id: number;
  name: string;
  hexColor: string;
  jobs: Job[];
  locations: Location[];
}

// HourlyRate.ts
export interface HourlyRate {
  id: number;
  name: string;
  description?: string;
  rate: number;
  customers: Customer[];
}
